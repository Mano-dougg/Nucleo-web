import Image from "next/image";
import SizeSelect from "./SizeSelect";
import { useRouter, useSearchParams } from "next/navigation";
import { DialogHTMLAttributes, useEffect, useRef } from "react";

interface ModalProps {
  open: string;
}

export const Modal = (props: ModalProps) => {
  return (
    <dialog
      className={`max-h-[800px] max-w-7xl w-full h-full shadow-2xl rounded-[60px] flex-col items-center justify-evenly absolute inset-0 ${props.open} bg-bg-card`}
    >
      <h1 className="text-5xl font-semibold">Editar</h1>

      <div
        className={`max-w-5xl h-3/4 flex items-center border border-black p-12 gap-16`}
      >
        <Image
          src={"/Frame 157.png"}
          height={486}
          width={414}
          alt="Imagem do produto"
        />
        <form className="flex flex-col h-auto gap-4">
          <h3 className="modal_edit_form_title">Nome</h3>
          <input
            type="text"
            disabled
            value={"Moletom estampado masculino"}
            className={`modal_edit_form_input`}
          />
          <h3 className="modal_edit_form_title">Valor:</h3>
          <input
            type="text"
            value={"R$120,00"}
            className={`modal_edit_form_input`}
          />
          <h3 className="modall_edit_form_title">Cor:</h3>
          <div className="flex gap-2 ml-4">
            <input
              type="radio"
              name="color"
              className=" modal_edit_form_radio bg-white"
              value={"white"}
            />
            <input
              type="radio"
              name="color"
              className=" modal_edit_form_radio bg-zinc-800"
              value={"gray"}
            />
            <input
              type="radio"
              name="color"
              className=" modal_edit_form_radio bg-red-500"
              value={"red"}
            />
            <input
              type="radio"
              name="color"
              className=" modal_edit_form_radio bg-blue-800 checked:bg-blue-600 "
              value={"blue"}
            />
          </div>
          <h3 className="modal_edit_form_title">Tamanhos</h3>
          <div className="flex gap-2 ml-4">
            <SizeSelect peerName={"p"} value={"P"} />
            <SizeSelect peerName={"m"} value={"M"} />
            <SizeSelect peerName={"g"} value={"G"} />
            <SizeSelect peerName={"gg"} value={"GG"} />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
