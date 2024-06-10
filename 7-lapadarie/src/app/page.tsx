import Header from "@/components/Header";
import QueueCard from "@/components/QueueCard";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="queue">
        <p>+ Adicionar pessoa a fila</p>
        <QueueCard></QueueCard>
      </section>
    </>
  );
}
