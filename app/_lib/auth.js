import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createGuest, getGuest } from "./data-service"
 
export const {handlers:{GET,POST},auth,signIn,signOut} = NextAuth({
  providers: [
    Google({
        clientId:process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET,     
    }),
  ],
  callbacks:{
    authorized({auth,req}){
      return auth?.user ? true:false
    },
   async signIn({user,account,profile}){
      try{
      const existingGuest=await getGuest(user.email);
      if(!existingGuest){
        await createGuest({email:user.email,fullName:user.name})
      }
      return true;
      }
    catch{
      return false;
    }
    },
    async session({session,user}){
      const guest=await getGuest(session.user.email)
      console.log('lola')
      console.log(guest)
      session.user.guestId=guest.id
      return session
    }
  },
  pages:{
    signIn:"/login"
  }
})