"use client";

import { useState } from "react";

const Produto = () => {
  const [file, setFile] = useState("");

  const handleUploadFile = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    console.log(file);
  };

  async function createInvoice(formData: FormData) {
    const rawFormData = {
      nome: formData.get("nome"),
      idade: Number(formData.get("idade")),
      email: formData.get("email"),
      senha: formData.get("senha"),
      estado: formData.get("estado"),
      cidade: formData.get("cidade"),
      image: file,
    };

    console.log(rawFormData);

    try {
      const response = await fetch("http://localhost:3001/usuario/cadastro", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rawFormData),
      });
      if (!response.ok) {
        throw "deu algum erro";
      }
      console.log(rawFormData);
    } catch (err) {
      return err;
    }
  }
  return (
    <form action={createInvoice}>
      <h1>Outra página</h1>
      <div className="flex flex-col gap-3">
        <input
          type="file"
          onChange={handleUploadFile}
          name="image"
          id="image"
          className="hidden"
        />
        <input type="text" placeholder="nome" name="nome" />
        <input type="text" placeholder="idade" name="idade" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="senha" name="senha" />
        <input type="text" placeholder="cidade" name="cidade" />
        <input type="text" placeholder="estado" name="estado" />
        <label htmlFor="image">
          <img src={file} alt="aqui está a imagem" />
        </label>
      </div>
      <button>Enviar requisição</button>
    </form>
  );
};

export default Produto;
