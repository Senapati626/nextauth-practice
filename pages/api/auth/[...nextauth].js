import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


const client_id = "594471558183-atrq080m12uc240qghpmdl0ji4842p2g.apps.googleusercontent.com"
const client_secret = "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"
export default NextAuth({
    providers: [
        //Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})