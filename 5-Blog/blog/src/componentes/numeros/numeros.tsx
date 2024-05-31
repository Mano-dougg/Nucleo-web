import styles7 from './numeros.module.css'
import { KeyTextField, RichTextField, asHTML } from '@prismicio/client'
import { createClient } from '../../../prismicio'
import { PrismicRichText, PrismicText } from '@prismicio/react'

async function Numeros(){
    const prismic = createClient()
    const starter = await prismic.getByUID('base', 'base')
    const animefav : RichTextField = starter.data.animefav
    const animevis : RichTextField = starter.data.qtdanimes
    const eps : RichTextField = starter.data.qtdeps
    const gen : RichTextField = starter.data.genfav
    return(
        <>
        <div className={styles7.div}> 
        <section>
        <hgroup>
        <h2>Anime favorito = </h2><PrismicRichText field={animefav} />
        <h2>Quantidade de animes assistidos =</h2><PrismicRichText field={animevis} />
        <h2>Quantidade de episódios vistos =</h2><PrismicRichText field={eps} />
        <h2>Gênero favorito =</h2><PrismicRichText field={gen} />
        </hgroup>
        </section>
        </div>
        </>
    )
}

export default Numeros