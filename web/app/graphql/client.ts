import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  "https://web3-store-be-1.vercel.app/api/graphql"
);

export default client;
