import React, { useState } from 'react'
import Modal from '../Modal'
import UpdataForm from '../formularios/UpdataForm'
import UpdataModal from '../modal/UpdateModal'

const ButtonsAndSearch = () => {
const [ver, setVer] = useState<boolean>(false)

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
        <Modal />
        <UpdataModal ver={ver} fechar={() => setVer(false)} abrir={() =>setVer(true)} />

        </div>
      
    </div>
  )
}

export default ButtonsAndSearch
