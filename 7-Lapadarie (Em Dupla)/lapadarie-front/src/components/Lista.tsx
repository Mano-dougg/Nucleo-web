import Modal from "./Modal";
import CardClient from "./ui/CardClient";

const Lista = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="min-w-[395px] h-auto flex flex-col px-5 md:max-w-[1235px] md:w-[1235px]">
        <Modal/>
        <CardClient cliente={"Alexandre Shyjada Sousa"} totalPao={"50 Pães"} totalPagar={"R$ 25,00"} />
        <CardClient cliente={"Alexandre Shyjada Sousa"} totalPao={"50 Pães"} totalPagar={"R$ 25,00"} />
      </div>
    </section>
  );
};

export default Lista;
