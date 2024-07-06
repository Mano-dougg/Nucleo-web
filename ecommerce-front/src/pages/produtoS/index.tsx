import Filter from '@/components/filter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductsSaleQueue from '@/components/productsForSale/ProductsSaleQueue'
import React from 'react'

const produtos = () => {
  return (
    <><Header/>
    <div className='flex justify-center mt-[150px] '>
      <Filter/>
      <div>
        <ProductsSaleQueue/>
      </div>

      </div>
      <Footer/></>
  )
}

export default produtos
