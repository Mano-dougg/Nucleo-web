import Classifics from '@/components/classifics/Classifics'
import ButtonsAndSearch from '@/components/createAndEdit/ButtonsAndSearch'
import Filter from '@/components/filter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductsSaleQueue from '@/components/productsForSale/ProductsSaleQueue'
import SearchBar from '@/components/SearchBar'
import React, { useState } from 'react'

const CreateAndEdit = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedFitting, setSelectedFitting] = useState<string | null>(null);
  const [searchProduct, setSearchProduct] = useState('');

  const handleFilterChange = (category: string | null, style: string | null, fitting: string | null) => {
    setSelectedCategory(category);
    setSelectedStyle(style);
    setSelectedFitting(fitting);
    

    
  };
  return (
    <>
      <Header searchProduct={setSearchProduct} />
      <main className='flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:mt-[150px]'>
      <SearchBar SearchProduct={setSearchProduct} />
      <Filter onCategoryChange={handleFilterChange} />
        <div className='flex flex-col  '>
            <ButtonsAndSearch/>
            <ProductsSaleQueue
            selectedCategory={selectedCategory}
            selectedStyle={selectedStyle}
            selectedFitting={selectedFitting}
            searchProduct={searchProduct}
            
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CreateAndEdit
