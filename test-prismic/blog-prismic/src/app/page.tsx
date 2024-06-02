import { NavBar } from "@/components/nav-bar";
import { Header } from "@/components/header";
import styled from "styled-components";
import { SectionOne } from "@/components/section1";
import { createClient } from "@/prismicio";


export default async function Home() {

  const client = createClient();
  const page = await client.getByUID("title", "main");
  
  return (
    <>
      <Header />
      <NavBar title={page.data.title}/>
      <SectionOne/>
  
    </>
  );
}
