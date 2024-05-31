"use client";

import Image from "next/image"; 
import PageHeader from "./header"
import PageFooter from "./footer"
import Card from "./cards1";
import "./globals.css"



export default function Home() {
  return (
    <main>
      <PageHeader></PageHeader>
      <br />
      <Card></Card>
      <br />
      <PageFooter></PageFooter>
    </main>
  );
}
