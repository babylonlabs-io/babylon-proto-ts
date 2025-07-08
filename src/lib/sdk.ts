import { createBabylonClient } from "./client";
import { createMessages } from "./messages";

interface BabylonConfig {
  rpcUrl: string;
}

export const createBabylonSDK = ({ rpcUrl }: BabylonConfig) => {
  const client = createBabylonClient(rpcUrl);

  return {
    connect: () => client.connect(),
    client,
    messages: createMessages(),
  };
};
