import { Web3sdkioAuth } from "@web3sdkio/auth/next";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  // Using environment variables to secure your private key is a security vulnerability.
  // Learn how to store your private key securely:
  // https://portal.web3sdk.io/sdk/set-up-the-sdk/securing-your-private-key
  privateKey: process.env.ADMIN_PRIVATE_KEY as string,
  domain: "example.com",
});
