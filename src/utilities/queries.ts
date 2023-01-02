import { terra } from "./lcd";

// custom queryMsg function
// takes 2 parameters
// contractAddress - the contract address we would like to query
// msgQuery - our query message we want to send to the API
export const queryMsg = async (contractAddress: string, msgQuery: object) => {
  try {
    if (contractAddress) {
      const queryResponse: any = await terra.wasm.contractQuery(
        contractAddress,
        msgQuery
      );
      return queryResponse;
    }
  } catch (error: any) {
    if (
      error.response.data.message ===
      'cosmwasm_std::addresses::Addr not found: query wasm contract failed: invalid request'
    ) {
      return { addr: 'Contract Address Not Found' };
    }
  }
};

export const queryBalance = (wallet: any) => {
  return {
    balance: {
      address: `${wallet}`
    }
  };
};

export const queryAllGovernanceParameters = () => {
  return { all_governance_parameter: {} };
};