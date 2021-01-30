import PlayersList, {
  ALL_CLUBS_QUERY,
  ALL_COUNTRIES_QUERY,
} from '../components/apollo-players-list';
import { initializeApollo } from '../lib/apollo-client';
import Link from 'next/link';

const ApolloPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        EPL Player Directory <Link href="/table">(EPL Table)</Link>
      </h1>
      <PlayersList />
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_COUNTRIES_QUERY,
  });

  await apolloClient.query({
    query: ALL_CLUBS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default ApolloPage;
