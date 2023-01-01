import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { walletAddress } from '@recoil/atoms';

export default function useWallet() {
    const setWalletAddress = useSetRecoilState(walletAddress);
    const connectedWallet = useConnectedWallet();
    console.log('connectedWallet: ' + JSON.stringify(connectedWallet));

    useEffect(() => {

        if (connectedWallet !== undefined) {
            console.log('Connected Wallet');
            setWalletAddress(connectedWallet?.walletAddress);
        } else {
            console.log('No Wallet Connected');
        }

    }, [connectedWallet, setWalletAddress]);
    console.log('walletAddress: ' + JSON.stringify(walletAddress));
    return connectedWallet?.walletAddress;
}
