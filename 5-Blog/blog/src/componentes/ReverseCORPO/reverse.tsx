import { RichTextField, asHTML } from '@prismicio/client'
import styles4 from './reverse.module.css'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'

async function Reverse(){
    const prismic = createClient()
    const posts = await prismic.getByUID('posta','post')
    const contentador: RichTextField = posts.data.contentador3
    const img1 = posts.data.ultimaimg.url 
    const imageUrl = typeof img1 === 'string' ? img1 : '';
    return(
        <>
        <div className={styles4.div}>
        <figure>
        <img src={imageUrl}/>
        </figure>
        <footer><PrismicRichText field={contentador} /></footer>
        </div>
        </>
    )
}

export default Reverse