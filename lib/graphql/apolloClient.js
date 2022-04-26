import { ApolloClient, InMemoryCache } from '@apollo/client';
//import { bootstrap as bootstrapGlobalAgent } from 'global-agent';

//bootstrapGlobalAgent();

const graphCMSToken = process.env.GRAPHCMS_TOKEN;
const graphCMSUri = process.env.NEXT_PUBLIC_GRAPHCMS_URI;

const apolloClient = new ApolloClient({
   uri: graphCMSUri,
   cache: new InMemoryCache(),
   headers: {
      "authorization": `Bearer ${graphCMSToken}`
   }
});

export default apolloClient;