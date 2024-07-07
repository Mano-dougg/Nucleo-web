import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CarQueue from '@/components/productsInCar/CarQueue'
import React from 'react'

const ProductsInCar = () => {
  return (
    <><Header isCarrinho={true}/>
    <CarQueue/>
    
      <Footer/></>
  )
}

export default ProductsInCar
