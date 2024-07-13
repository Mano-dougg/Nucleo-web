import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CarQueue from '@/components/productsInCar/CarQueue'
import RecentlySeen from '@/components/recently-seen/RecentlySeen'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const ProductsInCar = () => {
  return (
    <><Header isCarrinho={true}/>
    <main className='items-center flex-col flex gap-10'>
      <SearchBar/>
    <CarQueue/>
    <RecentlySeen/>
    </main>
    
      <Footer/></>
  )
}

export default ProductsInCar
