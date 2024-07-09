"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SizeSelect from "./SizeSelect";
import Image from "next/image";
import useDialog from "@/hooks/useDialog";
import Link from "next/link";

const Modal = () => {
  const { isOpen, onClose, onOpen } = useDialog();

  return (
    <Dialog open={isOpen} modal defaultOpen={isOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => onOpen()}
          className="sm:flex hidden"
        >
          Edit Profile
        </button>
      </DialogTrigger>
      <Link href={"/modal"} className=" border border-black p-5 sm:hidden">
        Edit Profile
      </Link>
      <DialogContent className="max-h-[800px] max-w-7xl w-full h-full flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl">Editar</DialogTitle>
        </DialogHeader>
        <div
          className={`max-w-5xl w-full h-3/4 flex items-center border border-black justify-center gap-16 px-2 overflow-hidden mb-14`}
        >
          <Image
            src={"/Frame 153.png"}
            height={486}
            width={414}
            alt="Imagem do produto"
          />
          <form className="flex flex-col h-auto gap-4 " >
            <h3 className="modal_edit_form_title">Nome</h3>
            <input
              type="text"
              disabled
              value={"Moletom estampado masculino"}
              className={`modal_edit_form_input`}
              id="inTeste"
            />
            <h3 className="modal_edit_form_title">Valor:</h3>
            <input
              type="text"
              value={"R$120,00"}
              className={`modal_edit_form_input`}
            />
            <h3 className="modal_edit_form_title">Cor:</h3>
            <div className="flex gap-2 ml-2">
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
            <div className="flex w-full justify-between  items-center ml-2 mb-5">
              <SizeSelect peerName={"p"} value={"P"} />
              <SizeSelect peerName={"m"} value={"M"} />
              <SizeSelect peerName={"g"} value={"G"} />
              <SizeSelect peerName={"gg"} value={"GG"} />
            </div>
            <div className="flex justify-evenly">
              <button
                type="submit"
                className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max"
                onClick={onClose}
              >
                Salvar
              </button>
              <button
                type="button"
                className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max"
                onClick={onClose}
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
        <button
          type="button"
          className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max"
          onClick={onClose}
        >
          Voltar
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
