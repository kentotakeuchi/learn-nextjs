import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      // SMTP connection string or nodemailer configuration object https://nodemailer.com/
      server: process.env.NEXTAUTH_EMAIL_SERVER,
      // Email services often only allow sending email from a valid/verified address
      from: process.env.NEXTAUTH_EMAIL_FROM,
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
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
