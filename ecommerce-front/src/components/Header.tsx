import Link from "next/link";
import React, { useState } from "react";

type Props = {
  isCarrinho?: boolean;
};

function Header({ isCarrinho }: Props) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="bg-[#3B8039] flex items-center sm:justify-center lg:space-x-10 space-x-2 justify-between relative w-full">
      <Link href="/">
        <img className="sm:w-auto w-[68px]" src="/Clothes 1.svg" alt="Logo" />
      </Link>
      <div className="w-[48%] hidden h-[47px] rounded-[60px] border-[1px] sm:flex bg-[white] border-black items-center px-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full text-[20px] font-medium bg-transparent focus:outline-none"
        />
        <button>
          <img src="/search.svg" alt="Buscar" />
        </button>
      </div>
      <button className="sm:hidden" onClick={toggleModal}>
        <img src="/menu-home.svg" alt="Menu" />
      </button>
      {!isCarrinho && (
        <div className="sm:flex hidden md:gap-10 gap-4">
          <img src="/user-home.svg" alt="Usuário" />
          <img src="/headphones-home.svg" alt="Fones de ouvido" />
          <Link href={"/itemCar"}>
            <img src="/shopping-cart-home.svg" alt="Carrinho de compras" />
          </Link>
        </div>
      )}
      {isCarrinho && (
        <div className="hidden sm:flex">
          <button className="bg-black text-white rounded-[60px] md:text-[24px] text-[16px]  px-4 py-1 ">
            Continuar Comprando
          </button>
        </div>
      )}

      {showModal && (
        <div className="absolute bg-[#CBE8CA] border border-black w-[252px] top-full right-0 flex flex-col items-center gap-0 space-y-6 sm:hidden pb-3">
          <p className="text-[20px] font-inter mt-4">Produtos</p>
          <p className="text-[20px] font-inter">Carrinho</p>
          <p className="text-[20px] font-inter">HomePage</p>
          <p className="text-[20px] font-inter">Criação</p>
          <p className="text-[20px] font-inter">Dark Mode</p>
          <p className="text-[20px] font-inter">Suporte</p>
        </div>
      )}
    </header>
  );
}

export default Header;
