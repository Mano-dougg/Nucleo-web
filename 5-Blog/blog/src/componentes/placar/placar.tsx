import styles6 from './placar.module.css'
import { KeyTextField, RichTextField, asHTML } from '@prismicio/client'
import { createClient } from '../../../prismicio'
import { PrismicRichText, PrismicText } from '@prismicio/react'

async function Placar(){
    const prismic = createClient()
    const starter = await prismic.getByUID('base', 'base')
    const fot = starter.data.animeatual.url
    const perso = starter.data.persfav.url
    const legenda : RichTextField = starter.data.animename
    const legenda1 : RichTextField = starter.data.legenda
    const nomedoperso : RichTextField = starter.data.personame
    const visivel = typeof fot === 'string' ? fot : '';
    const persos = typeof perso === 'string' ? perso : '';
    return(
        <>
        <div className={styles6.div}> 
        <h1>Minhas Estatísticas de Anime</h1>
        <section>
        <figure>
            <img src={visivel}/>
            <figcaption>
            <h2>Último Anime Visto</h2>
            <PrismicRichText field={legenda} />
            </figcaption>
        </figure>
        <div><PrismicRichText field={legenda1} /></div>
        </section>
        <section>
        <figure>
            <img src={persos}/>
            <figcaption>
            <h3>Personagem favorito nos Animes</h3>
            <span><PrismicRichText field={nomedoperso} /></span>
            </figcaption>
        </figure>
        </section>
        </div>
        </>
    )
}

export default Placar