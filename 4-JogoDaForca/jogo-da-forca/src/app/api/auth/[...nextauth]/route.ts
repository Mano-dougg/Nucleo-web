import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../../../lib/prisma";
import { compare } from "bcrypt"

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if(!credentials){
                    return null
                }
                // const res = await fetch("/your/endpoint", {
                //     method: "POST",
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" },
                // });
                // const user = await res.json();
                if (!credentials?.email  && !credentials?.password){
                    return null
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email,
                    }
                })

                if(!user) return null;

                const checkPassword = await compare(credentials.password, user.password)   

                if(!checkPassword) return null;
                
                return{
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            },
        }),
    ],
    theme:{
        colorScheme:'light'
    },
    callbacks: {
        session: async ({ session, token, user }) => {
            if (session?.user) {
                session.user.id = token.sub ;
            }
            return session;
        },
    }
});

export { handler as GET, handler as POST }
