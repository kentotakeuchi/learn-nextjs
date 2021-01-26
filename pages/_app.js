// next-auth
import { Provider } from 'next-auth/client';

// apollo
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo-client';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
