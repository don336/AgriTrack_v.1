import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User.schema";
import { connect } from "@/utils/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_SECRET,
      clientSecret: process.env.CLIENT_ID,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        if (session.user && session.user.email) {
          await connect();
          const sessionUser = await User.findOne({ email: session.user.email });

          if (sessionUser) {
            session.user.id = sessionUser._id.toString();
          }
        }
      } catch (error) {
        console.error("Error during session callbacks", error);
      }

      return session;
    },

    async signIn({ profile }) {
      try {
        await connect();
        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.username.replace(" ", "").toLowercase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.error("User Authentication failed", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
