import CardOutros from "@/components/CardOutros";
import CardProduto from "@/components/CardSemelhante";
import Comentario from "@/components/comentario/Comentario";
import BaseText from "@/components/comentario/textoBase/BaseText";
import SizeSelect from "@/components/SizeSelect";
import { GetStaticPathsResult, GetStaticProps } from "next";
import Image from "next/image";
import data from "./teste";

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
        className={` h-auto w-full flex lg:flex-row flex-col items-center justify-center py-10 lg:gap-20 gap-4 gap px-6`}
      >
        <div className={`flex flex-col gap-10`}>
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
      </section>
    </section>
  );
};

export default produto;
