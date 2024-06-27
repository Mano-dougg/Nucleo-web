
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt, { compare } from 'bcryptjs';
import NextAuth, { DefaultSession } from 'next-auth';
import { User as UserModel } from '@prisma/client';

const prisma = new PrismaClient();

declare module 'next-auth' {
  interface User extends UserModel {
    id: number;
  }
}

// Remova a linha `jwt: true` de `session`
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, req) => {
        if (!credentials) return null;
        
        // Encontre o usuário pelo email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Se o usuário não for encontrado, retorne null
        if (!user) {
          throw new Error('Email e/ou senha inválidos');
        }

        // Verifique se a senha é válida
        const isValid = await compare(credentials.password, user.password);

        // Se a senha não for válida, retorne null
        if (!isValid) {
          throw new Error('Email e/ou senha inválidos');
        }

        // Se as credenciais estiverem corretas, retorne o objeto do usuário
        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/login', // Redirecione para a página de login em caso de erro
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
        };
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});
