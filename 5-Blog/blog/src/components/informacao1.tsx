import '../app/page.module.css'
import Image from 'next/image'
import Robo from './img/Robo.jpeg'
import { PrismicNextImage } from '@prismicio/next'
import { createClient } from '../prismicio'
import { asHTML } from "@prismicio/client"
import { PrismicRichText } from '@prismicio/react'

async function informacao1() {
  const prismic = createClient()

  const blogg = await prismic.getByUID('blogg','blog')

  console.log(JSON.stringify(blogg.data, null, 2))

  
  return (
    <>
    <div className='Titulo1'>
    <PrismicRichText field={blogg.data.titulo} />
   </div>
    <div className='Informacao1'>
   <div className='Paragrafo1'>
   <PrismicRichText field={blogg.data.subtitulo} />
   <PrismicRichText field={blogg.data.paragrafo} />
   </div>
   <div className='Imagem'>
    <PrismicNextImage field={blogg.data.imagemrobo} />
   </div>
   </div>
   <div>
   </div>

    </>
  )
}

export default informacao1