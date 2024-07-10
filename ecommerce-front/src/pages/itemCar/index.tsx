import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CarQueue from '@/components/productsInCar/CarQueue'
import React from 'react'

const ProductsInCar = () => {
  return (
    <><Header isCarrinho={true}/>
    <main className='items-center flex-col flex '>
    <CarQueue/>
    </main>
    
      <Footer/></>
  )
}

export default ProductsInCar
