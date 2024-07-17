"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import UpdateForm from "../formularios/UpdataForm";
import { deleteProduct } from "@/controlers/deleteProduct";
import { useState, useEffect } from "react";

interface UpdateModalProps {
  ver: boolean;
  fechar: () => void;
  abrir: () => void;
  link: string;
}

const UpdateModal = ({ ver, fechar, abrir, link }: UpdateModalProps) => {
  const handleClick = () => {

      sessionStorage.setItem('pageId', link)
  };

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
        onClick={() => handleClick()}
      >
        Editar
      </Link>
      <DialogContent className="max-w-7xl w-full h-auto flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl">Editar</DialogTitle>
        </DialogHeader>
        <UpdateForm
          link={link}
          onDelete={() => {
            deleteProduct(Number(link));
            alert("Excluído");
          }}
        />
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

export default UpdateModal;
