// auth
import { signIn, signOut, useSession } from 'next-auth/client';
// db
import { connectToDatabase } from '../utils/mongodb';

export default function Page({ isConnected }) {
  console.log('test for lerna');
  const [session, loading] = useSession();

  return (
    <>
      {/* auth */}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}

      {/* db */}
      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // mongodb
  const { client, db } = await connectToDatabase();
  const isConnected = await client.isConnected(); // Returns true or false

  return {
    props: { isConnected },
  };
}
