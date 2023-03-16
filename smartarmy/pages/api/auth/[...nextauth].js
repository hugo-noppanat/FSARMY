import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "USER_ID", type: "text" },
        password: {  label: "PASSWORD", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SSARMY_AUTHEN}/authen/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        // console.log(res.ok);
        // If no error and we have user data, return it
        if (res.ok) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
    // ...add more providers here
  ],
  pages: {
    signIn: '/login',
    error:"/login",
    signOut: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials}) {
      // setUser(user)
      console.log("user", user, credentials);
      return credentials
    },
    // async session({ session, token }) {
    //   console.log("session", session);
    // },
  },
  session: {
    strategy: "jwt",
    // maxAge 2 minutes 
    maxAge: 1 * 24 * 60 * 60,
  },
}
export default NextAuth(authOptions)
