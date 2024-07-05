import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#3B8039] flex justify-around sm:justify-around sm:space-x-10 sm:px-10 sm:pt-7 pt-3 pb-3 mt-4'>
      <div className='sm:flex hidden space-x-10'>
        <div className='space-y-6 max-w-[175px]'>
          <h6 className='font-inter text-white text-[24px]'>
            Informações da empresa
          </h6>
          <div className='text-[#BEBEBE] text-[24px]'>
            <p>Boxclothes regras</p>
            <p>Sobre a BoxClothes</p>
          </div>
        </div>
        <div className='space-y-6'>
          <h6 className='text-[24px] font-inter text-white'>
            Ajuda e suporte
          </h6>
          <div className='text-[#BEBEBE] text-[24px] space-y-2.5'>
            <p>Politica de frete</p>
            <p>Devolução</p>
            <p>Reembolso</p>
            <p>Como pedir</p>
            <p>Como Rastrear</p>
          </div>
        </div>
        <div className='max-w-[220px] space-y-5'>
          <h6 className='text-[24px] font-inter text-white'>
            Atendimento ao cliente
          </h6>
          <div className='text-[#BEBEBE] space-y-4 text-[24px]'>
            <p>Contate-Nos</p>
            <p>Método de pagamento</p>
          </div>
        </div>
      </div>
      
      <div className=''>
        <div className='flex space-x-8 sm:space-x-0'>
          <div className='sm:hidden'>
            <img className='w-[81px]' src='Clothes 1.svg' alt='Logo' />
            <p className='font-inter text-white text-[20px]'>BoxClothes</p>
          </div>
          <div className='max-w-[400px] space-y-6'>
            <h6 className='sm:text-[24px] sm:ml-0 ml-3 text-[16px] text-white'>
              Encontre-nos em:
            </h6>
            <div className='flex sm:space-x-8 space-x-4'>
              <img src='facebook-white.svg' alt='Facebook' />
              <img src='instagram-white.svg' alt='Instagram' />
              <img src='twitter-white.svg' alt='Twitter' />
              <img src='linkedin-white.svg' alt='LinkedIn' />
              <img className='hidden sm:flex' src='youtube-white.svg' alt='YouTube' />
            </div>
            <h6 className='text-[24px] hidden sm:flex font-inter text-white'>
              Cadastre-se para receber E-mail da BoxClothes
            </h6>
            <div className='sm:flex pt-2 hidden'>
              <div className="w-[264px] hidden h-[54px] border-[1px] sm:flex bg-[white] border-black items-center pl-2">
                <input
                  type="text"
                  placeholder="Endereço do seu email"
                  className="w-full text-[16px] font-medium bg-transparent focus:outline-none"
                />
              </div>
              <button className="bg-black w-[126px] h-[54px] text-white text-center text-[20px]">
                Inscreva-se
              </button>
              
            </div>
          </div>
          
        </div>

        <div className=' flex-col sm:hidden text-[16px] '>
            <p className=' text-white pl-5 mt-2'>Cadastre-se para receber emails</p>
        <div className='sm:hidden flex relative pt-2'>
          <div className="flex w-[288px] sm:hidden h-[31px] rounded-[60px] bg-[white] border-black">
            <input
              type="text"
              placeholder="Seu email..."
              className="pl-2 text-[16px] font-medium bg-transparent focus:outline-none"
            />
            <button className="bg-black py-2 w-[68px] h-[31px] text-white text-center rounded-[60px] text-[10px] flex items-center justify-center">
              Inscreva-se
            </button>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
