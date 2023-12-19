import { ApolloClient, InMemoryCache } from '@apollo/client'
// Replace the endpoint of your graphql endpoint brother farewell
const client = new ApolloClient({
  uri: '/',
  cache: new InMemoryCache()
})

export default client
