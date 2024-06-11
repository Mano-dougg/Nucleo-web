import Image from "next/image";
import { default as Logo } from "@/components/Logo";
import TransactionQ from "@/components/TransactionQ";
import TransactionB from "@/components/TransactionB";
import TransactionA from "@/components/TransactionA";

// Os valores amount de cada componente ta hardcoded, a gente implementa depois

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center bg-pbeige">
      <div className="bg-plightbrown w-screen h-[374px] absolute top-0"></div>
      <header className="w-screen flex flex-col items-center pt-20 gap-28 z-10">
        <Logo />
        <section className="grid grid-flow-col gap-6">
          <TransactionQ amount="7" />
          <TransactionB amount="350" />
          <TransactionA amount="R$ 175,00" />
        </section>
      </header>
    </div>
  );
}
