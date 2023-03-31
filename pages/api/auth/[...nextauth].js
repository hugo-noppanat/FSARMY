import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// let userAccount = null;

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
        const data = await res.json()
        const user = {
          _id: data.accesstoken,
          name: data.user,
          email: data.accesstoken,

        }
      
        if (res.ok && user) {
          // console.log("user",user);
          return user
        }
        
        return null
      }
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/login',
    error:"/login",
    signOut: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials}) {;
      // console.log("signIn",user,credentials);
      return credentials
    },
    session: async ({ session, token }) => {
      return session;
    },
    jwt: async ({ token, user }) => {
      // console.log("jwt",token,user);
      user && (token.user = user);
      return token;
    },
  },
  // refetchInterval: 60,
  session: {
    strategy: "jwt",
    // maxAge 3h
    maxAge: 60 * 60 * 3,
  },
}
export default NextAuth(authOptions)
