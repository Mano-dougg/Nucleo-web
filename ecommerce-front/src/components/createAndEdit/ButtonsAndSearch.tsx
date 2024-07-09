import React from 'react'

const ButtonsAndSearch = () => {
  return (
    <div className='justify-around  flex items-center'>
         <div className="w-[38%] hidden sm:flex h-[46px] rounded-[60px] border-[1px] bg-[white] border-black items-center px-4 py-1 mt-4">
      <input
        type="text"
        placeholder="Pesquisar por um produto específico..."
        className="w-full text-[16px] font-medium bg-transparent focus:outline-none"
      />
      <img src="search.svg" alt="Search" />
    </div>

        <div className=' sm:gap-9 gap-3 flex mt-10'>
        <button className='bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] sm:px-16 px-8  py-2 '>
            Criar
          </button>
          <button className='bg-black text-white rounded-[60px] sm:text-[24px] text-[16px] sm:px-16 px-8 py-2 '>
            Editar
          </button>

        </div>
      
    </div>
  )
}

export default ButtonsAndSearch
