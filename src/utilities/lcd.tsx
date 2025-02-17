import { LCDClient } from '@terra-money/feather.js';
import { useWallet } from '@terra-money/wallet-provider';

function CurrentChain() {
  console.log('{LCD CLIENT}: ', useWallet().network.chainID);
}

export const lcd = () => {
  const chainID = CurrentChain();
  return new LCDClient({
    'pisco-1': {
      lcd: 'https://pisco-lcd.terra.dev',
      chainID: 'pisco-1',
      gasAdjustment: 1.75,
      gasPrices: { uluna: 0.015 },
      prefix: 'terra' // bech32 prefix, used by the LCD to understand which is the right chain to query
    },
    'osmosis-1': {
      chainID: 'osmosis-1',
      lcd: 'https://lcd.osmosis.zone',
      gasAdjustment: 1.75,
      gasPrices: {
        uosmo: 0.025
      },
      prefix: 'osmo'
    }
  });
};
