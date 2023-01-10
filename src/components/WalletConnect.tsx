import { ConnectType, useWallet, WalletStatus } from '@terra-money/wallet-provider';
import React, { useEffect } from 'react';
export default function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();

  useEffect(() => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (() => {
        <>
          Wallet not connected dumbfuck
        </>
      });
    }
    return (() => {
      <>
        Wallet connected dumbfuck
      </>
    });
  }, [WalletStatus, connect]);

  return (
    <>
      {JSON.stringify({ status, network, wallets }, null, 2)}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableConnectTypes.map((connectType) => (
            <button
              key={'connect-' + connectType}
              onClick={() => connect(connectType)}
            >
              Connect {connectType}
            </button>
          ))}
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()}>Disconnect</button>
      )}
    </>
  );
}