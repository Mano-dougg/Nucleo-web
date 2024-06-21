
import { LogIn } from "lucide-react";
import { Inter } from "next/font/google";
import Signin from "./singin";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Signin/>
    </>
  );
}
