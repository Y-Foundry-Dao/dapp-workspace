import { useEffect, useState } from 'react';
import { useWallet } from '@terra-money/wallet-provider';
import { terra } from 'utilities/lcd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chain/atoms';
import { currentChainIDAtom } from 'recoil/chain/atoms';
import { currentContractForgeAtom } from 'recoil/chain/atoms';
import { currentContractGovTokenAtom } from 'recoil/chain/atoms';
import getChainDeploy from '@utilities/getValues';
import { GetCurrentChainID } from '@utilities/getValues';

const useChainInfo = () => {
  const { network } = useWallet();
  const chainID = network.chainID;

  const [currentBlockHeight, setCurrentBlockHeight] = useRecoilState<any>(
    currentBlockHeightAtom
  );
  const [currentChainID, setCurrentChainID] =
    useRecoilState<string>(currentChainIDAtom);
  const [currentContractForge, setCurrentContractForge] =
    useRecoilState<string>(currentContractForgeAtom);
  const [currentContractGovToken, setCurrentContractGovToken] =
    useRecoilState<string>(currentContractGovTokenAtom);

  const setCurrentChainIDToState = async () => {
    const chainID = await GetCurrentChainID();
    setCurrentChainID(chainID);
  };

  const getCurrentContractForge = async () => {
    const contractForge = getChainDeploy(currentChainID, 'forge');
    return contractForge;
  };

  const setCurrentContractForgeToState = async () => {
    const contractForge = await getCurrentContractForge();
    setCurrentContractForge(contractForge);
  };

  const getCurrentContractGovToken = async () => {
    const contractGovToken = getChainDeploy(currentChainID, 'token');
    return contractGovToken;
  };

  const setCurrentContractGovTokenToState = async () => {
    const contractGovToken = await getCurrentContractGovToken();
    setCurrentContractGovToken(contractGovToken);
  };

  const getCurrentBlockHeight = async () => {
    const newBlockHeight = Number.parseInt(
      (await terra.tendermint.blockInfo()).block.header.height
    );
    return newBlockHeight;
  };

  const setCurrentBlockHeightToState = async () => {
    const blockHeight = await getCurrentBlockHeight();
    setCurrentBlockHeight(blockHeight);
  };

  useEffect(() => {
    console.log('{USE CHAIN INFO} useWallet: ', network);
    console.log('{USE CHAIN INFO} chainID: ', chainID);
    setCurrentChainIDToState();
    setCurrentContractForgeToState();
    setCurrentContractGovTokenToState();
  }),
    [chainID];

  useEffect(() => {
    console.warn('running every block');
    const interval = setInterval(async () => {
      return setCurrentBlockHeight(await getCurrentBlockHeight());
    }, 6000);
    return () => clearInterval(interval);
  });

  return {
    currentBlockHeight,
    currentChainID,
    currentContractForge
  };
};

export default useChainInfo;
