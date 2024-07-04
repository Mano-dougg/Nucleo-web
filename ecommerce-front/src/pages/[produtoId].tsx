
import CardOutros from "@/components/CardOutros";
import CardProduto from "@/components/CardSemelhante";
import Comentario from "@/components/comentario/Comentario";
import BaseText from "@/components/comentario/textoBase/BaseText";
import SizeSelect from "@/components/SizeSelect";
import Image from "next/image";

const produto = () => {
  return (
    <section
      className={`flex h-auto w-screen flex-col items-center bg-bg-primary `}
    >
      <nav className="w-full h-[115px] bg-red-500"></nav>

      <div
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
      </div>
    </section>
  );
};

export default produto;
