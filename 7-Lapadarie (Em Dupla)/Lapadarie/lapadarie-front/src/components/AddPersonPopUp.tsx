import React, { Children, useState } from "react";
import "../app/globals.css";
import axios from "axios";

interface AddPersonPopUpProps {
  // isVisible: boolean;
  onClose: () => void;
}

const AddPersonPopUp: React.FC<AddPersonPopUpProps> = ({ onClose }) => {
  const [customerName, setCustomerName] = useState<string>("");
  const [totalBreads, setTotalBreads] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:4040/adicionar", {
      customer_name: customerName,
      numberOfBreads: totalBreads,
    });

    // fecha o formulário dps de enviar
    onClose();
    window.location.reload();
  };

  return (
    <section className="bg-white w-[605px] h-[347px] flex flex-col p-8 justify-center rounded-lg mt-10">
      <form onSubmit={handleSubmit}>
        <label htmlFor="customerName" className="mb-6 font-bold text-pbrown">
          Adicionar pessoa à fila
        </label>
        <input
          className="bg-gray-100 mb-4 h-[50px] rounded-md placeholder-gray-500 pl-5"
          type="text"
          placeholder="Nome completo do cliente"
          id="name-input"
          required
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          className="bg-gray-100 mb-16 h-[50px] rounded-md placeholder-gray-500 pl-5"
          type="number"
          placeholder="Total de pães:"
          id="bread-amount-input"
          required
          min="0"
          value={totalBreads}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </form>
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
    </section>
  );
};

export default AddPersonPopUp;
