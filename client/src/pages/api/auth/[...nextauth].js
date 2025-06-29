import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { signIn, signOut } from "next-auth/react"
// import { pages } from "next/dist/build/templates/app-page"

import { getUserByEmail } from "@/pages/util/userAPI.js"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // user login logic
        try {
          const user = getUserByEmail({
            email: credentials.email,
            password: credentials.password,
          })
          console.log("user is", user)
          return user
        } catch (error) {
          throw new Error(error);
        }
      }
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = "account.access_token"
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = "token.accessToken"
      return session
    }
  }
}

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }
// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth(authOptions)

// export default function auth(req, res) {
//   return NextAuth(authOptions)
// }

export default NextAuth(authOptions)