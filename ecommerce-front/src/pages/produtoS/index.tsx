import Filter from '@/components/filter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductsSaleQueue from '@/components/productsForSale/ProductsSaleQueue'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const Produtos = () => {
  return (
    <><Header/>
    <div className='flex justify-center flex-col sm:flex-row items-center sm:items-start sm:mt-[150px] '>
      <SearchBar/>
      <Filter/>
      <div>
        <ProductsSaleQueue/>
      </div>

      </div>
      <Footer/></>
  )
}

export default Produtos
