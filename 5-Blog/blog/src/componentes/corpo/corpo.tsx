import { RichTextField, asHTML } from '@prismicio/client'
import styles1 from './corpo.module.css'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'

async function Corpo(){
    const prismic = createClient()
    const bases = await prismic.getByUID('base','base')
    const title = asHTML(bases.data.title)
    const content10: RichTextField = bases.data.cotent
    const subtitle : RichTextField = bases.data.subtitle
    const img1 = bases.data.imagem.url
    const imageUrl = typeof img1 === 'string' ? img1 : '';
    return(
        <>
        <div className={styles1.div}>
        <div dangerouslySetInnerHTML={{__html:title}}></div> 
        <span><PrismicRichText field={subtitle} /></span>
        <figure>
        <img src={imageUrl}/>
        </figure>
        <footer><PrismicRichText field={content10} /></footer>
        </div>
        </>
    )
}

export default Corpo