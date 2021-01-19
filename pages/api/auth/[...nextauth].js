import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: {
        host: process.env.NEXTAUTH_SENDGRID_HOST,
        port: process.env.NEXTAUTH_SENDGRID_PORT,
        auth: {
          user: process.env.NEXTAUTH_SENDGRID_USER,
          pass: process.env.NEXTAUTH_SENDGRID_PASSWORD,
        },
      },
      from: process.env.NEXTAUTH_SENDGRID_FROM,
    }),
    // When configuring oAuth providers make sure you enabling requesting
    // permission to get the users email address (required to sign in)
    // Providers.Apple({
    //   clientId: process.env.NEXTAUTH_APPLE_ID,
    //   clientSecret: process.env.NEXTAUTH_APPLE_KEY_SECRET,
    //   clientSecretCallback: false,
    // }),
    Providers.Google({
      clientId: process.env.NEXTAUTH_GOOGLE_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.NEXTAUTH_FACEBOOK_ID,
      clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.NEXTAUTH_TWITTER_ID,
      clientSecret: process.env.NEXTAUTH_TWITTER_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.NEXTAUTH_GITHUB_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET,
    }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: `mongodb+srv://${process.env.DATABASE_MONGODB_USERNAME}:${process.env.DATABASE_MONGODB_PASSWORD}@cluster0.khcn5.mongodb.net/${process.env.DATABASE_MONGODB_DBNAME}?retryWrites=true&w=majority`,
};

export default (req, res) => NextAuth(req, res, options);
