import React, { useState } from "react";
import axios from "axios";

interface AddPersonPopUpProps {
  isVisible: boolean;
  onClose: () => void;
}

const inicializaBanco = async() =>{
  await axios.post('http://localhost:4040/inicializarBanco')
}

inicializaBanco()

const AddPersonPopUp: React.FC<AddPersonPopUpProps> = ({
  onClose,
  isVisible,
}) => {
  const [name, setName] = useState("");
  const [breads, setBreads] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let value = breads * 0.5;
      await axios.post("http://localhost:4040/adicionar", {
        name,
        quant_paes: breads,
        valor: value,
      });

      const valores = await axios.get('http://localhost:4040/pegarBanco');

      let quantClientes = valores.data.quant_fila;

      let quantPaes = valores.data.quant_total_paes;

      let quantTotal = valores.data.valor_total;

      quantClientes += 1;

      quantPaes += breads;

      quantTotal += value;

      await axios.put('http://localhost:4040/atualizarBanco', {
        quant_fila: quantClientes,
        quant_total_paes: quantPaes,
        valor_total: quantTotal
      });



      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao adicionar pessoa: ", error);
    }
  };

  if (!isVisible) return null;


  return (
    <section className="bg-white w-[605px] h-[347px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-8 justify-center rounded-lg mt-10 z-30">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="name" className="mb-6 font-bold text-pbrown">
          Adicionar pessoa à fila
        </label>
        <input
          className="bg-gray-100 mb-4 h-[50px] rounded-md placeholder-gray-500 pl-5"
          type="text"
          placeholder="Nome completo do cliente"
          id="name-input"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="bg-gray-100 mb-16 h-[50px] rounded-md placeholder-gray-500 pl-5"
          type="number"
          placeholder="Total de pães:"
          id="bread-amount-input"
          name="breads"
          value={breads}
          onChange={(e) => setBreads(parseInt(e.target.value))}
          required
        />
        <div className="flex flex-row gap-4">
          <button
            className="bg-pbrown font-medium text-white h-[60px] w-[50%] rounded-md"
            type="submit"
          >
            Enviar
          </button>
          <button
            type="button"
            className="bg-white font-medium border-2 border-red-600 h-[60px] w-[50%] rounded-md text-red-600"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPersonPopUp;
