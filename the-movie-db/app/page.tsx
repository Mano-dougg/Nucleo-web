'use client'
import { Header } from "@/components/header";
import { MovieList } from "@/components/MovieList";
import Footer from "@/components/footer";
import { createUser } from "./src/services/service";
import { useEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const searchParams = useSearchParams()
  const { data: session, status, update } = useSession();
  const approved = searchParams.get('approved');
  console.log(approved);

  console.log(status);
  console.log(session);

  useEffect(() => {
    const requestToken = (session as any)?.requestToken;
    console.log(requestToken);
    if (approved && requestToken) {
      update({ requestToken });
    }
  }, []);

  const addUser = async (password: string, email: string, name: string) => {
    try {
      const createdUser = await createUser(password, email, name);
      console.log(createdUser);
      if (createdUser) {
        redirect('/login')
      }
    } catch (error: any) {
      console.error('Error adding user:', error.message);
    }
  };

  return (
    <>
      <Header addUser={addUser} onSearch={setSearchTerm} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <MovieList searchTerm={searchTerm} />
      </main>
      <Footer />
    </>
  );
}
