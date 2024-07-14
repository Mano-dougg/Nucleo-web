"use client";

import Footer from "@/components/Footer";
import UpdateForm from "@/components/formularios/UpdataForm";
import Header from "@/components/Header";

const Produto = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-5">
    <Header />
    <UpdateForm  formStyle="border-none flex-col" divStyle="w-10/12 min-w-96"/>
    <Footer />
    </div>
  );
};

export default Produto;
