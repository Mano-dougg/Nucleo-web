import React, { Children } from "react";
import "../app/globals.css";

interface AddPersonPopUpProps {
  // Define any props for your component here
}

const AddPersonPopUp: React.FC<AddPersonPopUpProps> = ({}) => {
  return (
    <section className="bg-white w-[605px] h-[347px] flex flex-col p-8 justify-center rounded-lg mt-10 hidden">
      <h3 className="mb-6 font-bold text-pbrown">Adicionar pessoa à fila</h3>
      <input
        className="bg-gray-100 mb-4 h-[50px] rounded-md placeholder-gray-500 pl-5"
        type="text"
        placeholder="Nome completo do cliente"
        id="name-input"
      />
      <input
        className="bg-gray-100 mb-16 h-[50px] rounded-md placeholder-gray-500 pl-5"
        type="text"
        placeholder="Total de pães:"
        id="bread-amount-input"
      />
      <div className="flex flex-row gap-4">
        <button className="bg-pbrown font-medium text-white h-[60px] w-[50%] rounded-md">
          Enviar
        </button>
        <button className="bg-white font-medium border-2 border-red-600 h-[60px] w-[50%] rounded-md text-red-600">
          Cancelar
        </button>
      </div>
    </section>
  );
};

export default AddPersonPopUp;
