import React, { useState } from 'react';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className='bg-[#3B8039] flex items-center sm:justify-center lg:space-x-10 space-x-2 justify-between relative'>
      <img className='sm:w-auto w-[68px]' src='/Clothes 1.svg' alt='Logo'></img>
      <div className="w-[48%] hidden h-[47px] rounded-[60px] border-[1px] sm:flex bg-[white] border-black items-center px-4">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full text-[20px] font-medium bg-transparent focus:outline-none"
        />
        <button>
          <img src='search.svg' alt='Buscar'></img>
        </button>
      </div>
      <button className='sm:hidden' onClick={toggleModal}>
        <img src='menu-home.svg' alt='Menu'></img>
      </button>
      <div className='sm:flex hidden md:gap-10 gap-4'>
        <img src='/user-home.svg' alt='Usuário'></img>
        <img src='/headphones-home.svg' alt='Fones de ouvido'></img>
        <img src='/shopping-cart-home.svg' alt='Carrinho de compras'></img>
      </div>

      {showModal && (
        <div className='absolute bg-[#CBE8CA] border border-black w-[252px]  top-full right-0 flex flex-col items-center gap-0 space-y-6 sm:hidden pb-3  '>
          <p className='text-[20px] font-inter mt-4'>Produtos</p>
          <p className='text-[20px] font-inter'>Carrinho</p>
          <p className='text-[20px] font-inter'>HomePage</p>
          <p className='text-[20px] font-inter'>Criação</p>
          <p className='text-[20px] font-inter'>Dark Mode</p>
          <p className='text-[20px] font-inter '>Suporte</p>
        </div>
      )}
    </header>
  );
}

export default Header;
