import React from 'react'

function Header() {
  return (
    <header className='bg-[#3B8039]  flex items-center sm:justify-center lg:space-x-10 space-x-2 justify-between   '>
      <img className='sm:w-auto w-[68px]' src='/Clothes 1.svg'></img>
      <div className="w-[48%] hidden h-[47px] rounded-[60px] border-[1px] sm:flex bg-[white] border-black items-center px-4 ">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full text-[20px] font-medium  bg-transparent focus:outline-none"
      
          />
          <button>
          <img src='search.svg'></img>
          </button>
        </div>
          <img className='sm:hidden'src='menu-home.svg'></img>
       
        <div className='sm:flex hidden md:gap-10 gap-4 '>
        <img src='/user-home.svg'></img>
        <img src='/headphones-home.svg'></img>
        <img src='/shopping-cart-home.svg'></img>
          </div>

      
    </header>
  )
}

export default Header
