import Image from "next/image";
import Card from "./ui/Card";

const Header = () => {
  return (
    <header
      className={`w-full md:h-[441px] h-auto flex flex-col items-center justify-end relative mb-96 md:mb-32`}
    >
      <div className="w-full h-[374px] max-h-[374px] bg-bg-header  py-20 flex flex-col items-center justify-center md:sticky md:top-0">
        <Image src={"/Logo.svg"} alt={""} width={155} height={113} />
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center items-center gap-6 z-10 absolute top-80 px-5">
        <Card
          titulo={"Pessoas na fila"}
          cardData={"7"}
          varianteCard={"card"}
          varianteData={"card-data"}
          icon={"/people.svg"}
        />
        <Card
          titulo={"Pães vendidos"}
          cardData={"350"}
          varianteCard={"card"}
          varianteData={"card-data"}
          icon={"/carrinho.svg"}
        />
        <Card
          titulo={"Entrada"}
          cardData={"175,00"}
          varianteCard={"card2"}
          varianteData={"card-data2"}
          icon={"/Money.svg"}
        />
      </div>
    </header>
  );
};

export default Header;
