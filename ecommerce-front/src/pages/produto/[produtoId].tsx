import CardOutros from "@/components/CardOutros";
import Comentario from "@/components/comentario/Comentario";
import BaseText from "@/components/comentario/textoBase/BaseText";
import SizeSelect from "@/components/SizeSelect";
import Image from "next/image";
import data from "./coments"; // for testing
import ServiceCard from "@/components/ServiceCard";
import Dropdown from "@/components/comentario/dropdown/Dropdown";
import CardSemelhante from "@/components/CardSemelhante";
import SectionCard from "@/components/SectionCard";

const produto = () => {
  return (
    <section
      className={`flex h-auto w-screen flex-col items-center bg-bg-primary `}
    >
      <nav className="w-full h-[115px] bg-red-500"></nav>

      <section
        className={` h-auto w-full flex lg:flex-row flex-col items-center justify-center py-10 lg:gap-20 gap-4 gap px-6`}
      >
        <Image
          src={"/Frame 69.png"}
          alt={"Modelo da foto"}
          height={425}
          width={588}
          className="lg:max-w-[425px] lg:max-h-[568px] max-w-56"
        />

        <div
          className={`h-auto w-auto flex flex-col lg:gap-9 gap-4 lg:items-start items-center`}
        >
          <p className="lg:text-4xl text-3xl font-semibold lg:text-start text-center">
            Blusa de Manga Estampada Feminina
          </p>
          <p className="lg:text-4xl text-3xl font-semibold">R$22,99</p>
          <p className="text-2xl text-black flex items-center font-semibold gap-4">
            Cor: Preto
            <span className="flex w-6 h-6 rounded-full bg-black"></span>
          </p>
          <p className="text-2xl text-black lg:font-normal font-semibold ">
            Tamanhos:
          </p>
          <div className="flex w-full max-w-96 lg:gap-4 lg:justify-normal justify-around">
            <SizeSelect peerName={"P"} value={"P"} />
            <SizeSelect peerName={"M"} value={"M"} />
            <SizeSelect peerName={"G"} value={"G"} />
            <SizeSelect peerName={"GG"} value={"GG"} />
          </div>
        </div>
      </section>

      <section
        className={` h-auto w-full flex lg:flex-row flex-col items-center justify-center py-10 lg:gap-20 gap-4 gap px-6 mb-20`}
      >
        <div className={`lg:flex flex-col gap-10 hidden`}>
          <BaseText isBlack={true}>Comentários:</BaseText>
          {data?.map((comment, index) => (
            <Comentario
              userImageUrl={comment.userImageUrl}
              userName={comment.userName}
              comentario={comment.comentario}
              time={comment.time}
              key={index}
            />
          ))}
        </div>
        <Dropdown />
        <div
          className={`lg:flex flex-col gap-4 justify-between w-auto h-autoo bg-bg-filter items-center px-5 py-6  hidden`}
        >
          <p className="text-3xl font-semibold w-full text-start text-text-primary">
            Sobre o serviço
          </p>
          <ServiceCard rightImgUrl="/send.svg">
            Frete gratis em pedidos acima de R$60,00
          </ServiceCard>
          <ServiceCard rightImgUrl="/refresh-cw.svg">
            Politica de Devolução
          </ServiceCard>
          <ServiceCard rightImgUrl="/shield.svg">
            Seguraça de compra
          </ServiceCard>
        </div>
      </section>

      <SectionCard title={"Items semelhantes"}>
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={""}
        />
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={""}
        />
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={"hidden"}
        />
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={"hidden"}
        />
      </SectionCard>

      <SectionCard title={"Outros itens"}>
        <CardOutros
          imageUrl="/Frame 1.png"
          produtoName="Sapatos"
          show={"hidden"}
        />
        <CardOutros imageUrl="/Frame 1.png" produtoName="Sapatos" />
        <CardOutros imageUrl="/Frame 1.png" produtoName="Sapatos" />
        <CardOutros
          imageUrl="/Frame 1.png"
          produtoName="Sapatos"
          show={"hidden"}
        />
      </SectionCard>
      <footer className="h-80 bg-red-500 w-full">
        Footer
      </footer>
    </section>
  );
};

export default produto;
