import CardOutros from "@/components/CardOutros";
import CardProduto from "@/components/CardSemelhante";
import Comentario from "@/components/comentario/Comentario";
import BaseText from "@/components/comentario/textoBase/BaseText";
import Image from "next/image";

const produto = () => {
  return (
    <section
      className={`flex flex-col h-screen w-full items-center bg-bg-primary`}
    >
      <nav className="w-full h-[115px] bg-red-500"></nav>

      <div className={` h-auto w-full flex justify-center`}>
        <Image src={""} alt={""} height={1} width={2} />

        <div className={`h-auto w-auto flex flex-col`}>
          <BaseText isBlack={true}>Blusa de Manga Estampada Feminina</BaseText>
          <BaseText isBlack={true}>R$22,99</BaseText>
          <p className="text-2xl text-black flex items-center font-semibold gap-4">
            Cor:Preto
            <span className="flex w-6 h-6 rounded-full bg-black"></span>
          </p>
          <p className="text-2xl text-black ">Tamanhos</p>
          <div className="flex w-full gap-4">
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default produto;
