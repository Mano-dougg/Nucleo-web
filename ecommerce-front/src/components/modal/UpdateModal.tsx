"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import useDialog from "@/hooks/useDialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import deleteFn from "@/controlers/delete";
import createFn from "@/controlers/create";
import UpdataForm from "../formularios/UpdataForm";

interface UpdataModalProps {
  ver: boolean;
  fechar: () => void;
  abrir: () => void;
}

const UpdataModal = ({ ver, fechar, abrir }: UpdataModalProps) => {
  return (
    <Dialog open={ver} modal defaultOpen={ver}>
      <DialogTrigger asChild>
        <button
          onClick={() => abrir()}
          className="sm:flex hidden bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] sm:px-16 px-8 py-2"
        >
          Editar
        </button>
      </DialogTrigger>
      <Link
        href={"/modal/update"}
        className=" border border-black p-5 sm:hidden bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] sm:px-16 px-8 py-2"
      >
        Editar
      </Link>
      <DialogContent className="max-w-7xl w-full h-auto flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl">Editar</DialogTitle>
        </DialogHeader>
        <UpdataForm />
        <button
          type="button"
          className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max"
          onClick={() => fechar()}
        >
          Voltar
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default UpdataModal;
