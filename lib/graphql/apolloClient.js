import { ApolloClient, InMemoryCache } from '@apollo/client';

const graphcmsUri = process.env.NEXT_PUBLIC_GRAPHCMS_URI;

const apolloClient = new ApolloClient({
   uri: graphcmsUri,
   cache: new InMemoryCache()
});

export default apolloClient;