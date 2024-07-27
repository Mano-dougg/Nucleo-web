"use client";

import Footer from "@/components/Footer";
import UpdateForm from "@/components/formularios/UpdataForm";
import Header from "@/components/Header";
import UpdateModal from "@/components/modal/UpdateModal";
import { deleteProduct } from "@/controlers/deleteProduct";
import { useState, useEffect } from "react";

const Produto = () => {

  const [id, setId] = useState<string>("");

  useEffect(() => {
    const storageIdExist = sessionStorage.getItem('pageId')?.toString();
    setId(storageIdExist || "");
    console.log(storageIdExist);
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Header />
      <UpdateForm
        formStyle="border-none flex-col"
        divStyle="w-10/12 min-w-96"
        link={id}
        onDelete={() =>{deleteProduct(Number(id));alert("Excluído");}}
      />
      <Footer />
    </div>
  );
};

export default Produto;
