import NextAuth from "next-auth/next";
//import Provider from "next-auth/providers";

export default NextAuth({
  providers: [
    /* Provider.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }), */
  ],
});
