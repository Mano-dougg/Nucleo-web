"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useDialog from "@/hooks/useDialog";
import Link from "next/link";
import CreateForm from "./formularios/CreateForm";

const Modal = () => {
  const { isOpen, onClose, onOpen } = useDialog();



  return (
    <Dialog open={isOpen} modal defaultOpen={isOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => onOpen()}
          className="sm:flex hidden bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] sm:px-16 px-8 py-2"
        >
          Criar
        </button>
      </DialogTrigger>
      <Link
        href={"/modal"}
        className=" border border-black p-5 sm:hidden bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] sm:px-16 px-8 py-2"
      >
        Criar
      </Link>
      <DialogContent className="max-w-7xl w-full h-auto flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl">Criar</DialogTitle>
        </DialogHeader>
        <CreateForm  close={onClose}/>
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
