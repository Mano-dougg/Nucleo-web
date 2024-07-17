import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductsQueue from '@/components/products/ProductsQueue'
import CarQueue from '@/components/productsInCar/CarQueue'
import RecentlySeen from '@/components/recently-seen/RecentlySeen'
import SearchBar from '@/components/SearchBar'
import React from 'react'
import { Product } from "../../../../ecommerce-server/node_modules/.prisma/client/";
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

export const getStaticProps: GetStaticProps = async () => {
  console.log('Getting Static Side Props');
  const res = await fetch(`http://localhost:3001/product/`);
  const products: Product[] | any = await res.json();
  
  return {
    props: {
      products
    }
  };
};

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

const ProductsInCar: React.FC<StaticProps> = ({ products }) => {
  const produtos = products
  
  return (
    <><Header isCarrinho={true} />
      <main className='items-center flex-col flex gap-10'>
        <SearchBar />
        <CarQueue products={produtos} />
        <RecentlySeen />
        <ProductsQueue />
      </main>

      <Footer /></>
  )
}

export default ProductsInCar
