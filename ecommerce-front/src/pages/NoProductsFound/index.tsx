import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

const NoProductFound = () => {
  return (
    <>
      <Header />
      <main className='items-center flex flex-col mt-10'>
        <SearchBar/>
      <div className='flex items-center flex-col mt-20 mb-40 border-black border-[1px] gap-10 bg-white px-4 py-10'>
        <img src='serviceIcons/alert-circle-red.svg' alt='Alerta' />
        <p className='text-center sm:text-[48px] text-[24px] font-bold'>Item não encontrado</p>
        <p className='sm:text-[36px] text-[20px] text-center text-[#4A4848] hidden sm:flex'>
          Confira os produtos em catálogo na HomePage e boas compras!
        </p>
        <button className="mt-4 px-[33px] py-[8px] rounded-[60px] bg-black text-white text-[15px] sm:text-[24px]">
          Cadastre-se/Login
        </button>
        <button className="mt-2 px-[33px] py-[8px] rounded-[60px] bg-black text-white text-[15px] sm:text-[24px]">
          Continuar comprando
        </button>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default NoProductFound;
