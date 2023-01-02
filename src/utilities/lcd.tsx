import { LCDClient } from '@terra-money/terra.js';
import { URL_LCD, CHAIN_ID } from '@utilities/variables';

export const terra = new LCDClient({
  URL: URL_LCD,
  chainID: CHAIN_ID
});
