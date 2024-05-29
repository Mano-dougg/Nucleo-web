import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/ui/Card/Card";
import Buttons from "@/components/ui/Buttons/Buttons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Buttons PlaceHolder={"More Article"} classes={"moreArticle"} />
      <Buttons PlaceHolder={"View All"} classes={"viewAll"} />
      <Buttons PlaceHolder={"Subscribe"} classes={"subscribe"} />
    </>
  );
}
