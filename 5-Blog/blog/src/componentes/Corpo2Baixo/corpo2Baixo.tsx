import { RichTextField, asHTML } from '@prismicio/client'
import styles3 from './corpo2Baixo.module.css'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'

async function Corpo2Baixo(){
    const prismic = createClient()
    const posts = await prismic.getByUID('posta','post')
    const tit: RichTextField = posts.data.subsecao
    const contentador2: RichTextField = posts.data.contentador2
    const img1 = posts.data.imgbas2.url 
    const imageUrl = typeof img1 === 'string' ? img1 : '';
    return(
        <>
        <div className={styles3.div}>
        <div><PrismicRichText field={tit} /> </div> 
        <figure>
        <img src={imageUrl}/>
        </figure>
        <footer><PrismicRichText field={contentador2} /></footer>
        </div>
        </>
    )
}

export default Corpo2Baixo