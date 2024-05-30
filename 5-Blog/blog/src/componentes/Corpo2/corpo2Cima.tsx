import { RichTextField, asHTML } from '@prismicio/client'
import styles2 from './corpo2.module.css'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'

async function Corpo2Cima(){
    const prismic = createClient()
    const posts = await prismic.getByUID('posta','post')
    const title1 : RichTextField = posts.data.title2
    const contentador: RichTextField = posts.data.contentador1
    const subtitleB : RichTextField = posts.data.subtitle2
    const img1 = posts.data.imgbas.url 
    const imageUrl = typeof img1 === 'string' ? img1 : '';
    return(
        <>
        <div className={styles2.div}>
        <div><PrismicRichText field={title1} /> </div> 
        <span><PrismicRichText field={subtitleB} /></span>
        <figure>
        <img src={imageUrl}/>
        </figure>
        <footer><PrismicRichText field={contentador} /></footer>
        </div>
        </>
    )
}

export default Corpo2Cima