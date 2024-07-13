"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import deleteFn from "@/controlers/delete";
import createFn from "@/controlers/create";
import CreateForm from "@/components/formularios/CreateForm";
import UpdataForm from "@/components/formularios/UpdataForm";

const Produto = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-5">
    <Header />
    <UpdataForm  formStyle="border-none flex-col" divStyle="w-10/12 min-w-96"/>
    <Footer />
    </div>
  );
};

export default Produto;
