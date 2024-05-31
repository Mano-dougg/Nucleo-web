"use client";

import Image from "next/image"; 
import PageHeader from "./header"
import PageFooter from "./footer"
import "./globals.css"



export default function Home() {
  return (
    <main>
      <PageHeader></PageHeader>
      <br />  
      <PageFooter></PageFooter>
    </main>
  );
}
