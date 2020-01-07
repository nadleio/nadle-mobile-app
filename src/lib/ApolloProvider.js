import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

import { SRV_GRAPHQL_URL } from "../config";

const { createUploadLink } = require("apollo-upload-client");

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("authToken");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const httpLink = createUploadLink({
  uri: SRV_GRAPHQL_URL
});

export const createCache = () => new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: createCache(),
  resolvers: {}
});

function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;
