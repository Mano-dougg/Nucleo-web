import { RichTextField, asHTML } from '@prismicio/client'
import { createClient } from '../../../prismicio'
import { PrismicRichText } from '@prismicio/react'
import styles10 from './partesuperior.module.css'

async function ParteSuperior(){
    const prismic = createClient()
    const autor = await prismic.getByUID('autor', 'autor')
    const titulo : RichTextField = autor.data.title3
    const img1 = autor.data.icon.url 
    const imageUrl = typeof img1 === 'string' ? img1 : '';
    const resumo : RichTextField = autor.data.resumo
    const fot1 = autor.data.foto1.url
    const fot2 = autor.data.foto2.url
    const fot3 = autor.data.foto3.url
    const image = typeof fot1 === 'string' ? fot1 : '';
    return(
        <>
        <div className={styles10.div}> 
        <div><PrismicRichText field={titulo}/> </div> 
        <figure>
            <img src={imageUrl}/>
            <figcaption><PrismicRichText field={resumo}/></figcaption>
        </figure>
        <h2>Top 3 fotos da galeria</h2>
        </div>
        </>
    )
}

export default ParteSuperior