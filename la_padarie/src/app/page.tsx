import Header from "@/components/Header";
import HeaderCard from "@/components/HeaderCard";
import Image from "next/image";

export default function Home() {
  const users = 7;
  const breads = 10;
  const total = 100;

  return (
    <>
    <Header users={0} breads={0} total={0} />
    <main className={`flex flex-col items-center w-full max-w-[95vw]`}>
      <div className={`flex flex-col w-full gap-4 relative top-[-50px] sm:flex-row sm:justify-between sm:max-w-[1250px]`}>
        <HeaderCard title='Pessoas na fila' value={users} icon={""} />
        <HeaderCard title='Quantidade de pães' value={breads} icon={""} />
        <HeaderCard title='Total' value={total} icon={""} dark={true} />
      </div>

      <footer className="text-[#5F3305] font-bold">
        <p> Com 💛 Info Jr UFBA 2024</p>
      </footer>

    </main>
    </>
  );
}
