import Classifics from '@/components/classifics/Classifics'
import ButtonsAndSearch from '@/components/createAndEdit/ButtonsAndSearch'
import Filter from '@/components/filter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductsSaleQueue from '@/components/productsForSale/ProductsSaleQueue'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const CreateAndEdit = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:mt-[150px]'>
        <SearchBar/>
        <Filter  />
        <div className='flex flex-col  '>
            <ButtonsAndSearch/>
          <ProductsSaleQueue  />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CreateAndEdit
