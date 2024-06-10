import Header from "@/components/Header";
import QueueCard from "@/components/QueueCard";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="queue">
        <p>+ Adicionar pessoa a fila</p>
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
        <QueueCard
          clientName="Alexandre Shyjada Sousa"
          totalBread="50 pães"
          toPay="R$ 25,00"
        />
      </section>
    </>
  );
}
