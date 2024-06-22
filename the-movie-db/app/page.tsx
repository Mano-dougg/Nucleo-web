'use client'
import Image from "next/image";
import {Header} from "@/components/header";
import { MovieList } from "@/components/MovieList";
import Footer from "@/components/footer";
import { createUser } from "./src/services/service";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const addUser = async (password: string, email: string, nome: string)  => {
    try {
      await createUser(password, email, nome);
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
