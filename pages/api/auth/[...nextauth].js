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
          name: data.user,
          accessToken: data.accesstoken,
          role: data.role,
          dept: data.detp,
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
      // console.log("session",token);
      if(token){
        session.role = token.role;
        session.dept = token.dept;
        session.accessToken = token.access_token;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.access_token = user.accessToken;
        token.role = user.role;
        token.dept = user.dept;
      }
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
