import React from 'react'

function Header() {
  return (
    <header className='bg-[#3B8039] space-x-14 flex items-center sm:justify-center justify-between px-2 '>
      <img className='sm:w-auto w-[68px]' src='/Clothes 1.svg'></img>
      <div className="w-[692px] hidden h-[47px] rounded-[60px] border-[1px] sm:flex bg-[white] border-black items-center px-4 ">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full text-[20px] font-medium  bg-transparent focus:outline-none"
      
          />
        </div>
        <div className='sm:hidden'>
          <img src='menu-home.svg'></img>
        </div>
       
        <div className='sm:flex hidden sm:space-x-16 '>
        <img src='/user-home.svg'></img>
        <img src='/headphones-home.svg'></img>
        <img src='/shopping-cart-home.svg'></img>
          </div>

      
    </header>
  )
}

export default Header
