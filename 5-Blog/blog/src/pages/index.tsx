import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/ui/Card/Card";
import Buttons from "@/components/ui/Buttons/Buttons";
import NavBar from "@/components/ui/NavBar/NavBar";
import Header from "@/components/ui/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar/>
      <Header></Header>
    </>
  );
}
