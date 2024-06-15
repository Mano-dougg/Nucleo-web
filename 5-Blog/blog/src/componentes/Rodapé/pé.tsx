import { LinkField, RichTextField } from '@prismicio/client'
import { createClient } from '../../../prismicio'
import styles3 from './pé.module.css'
import { PrismicLink } from '@prismicio/react'

async function Pe(){
    const prismic = createClient()
    const bases = await prismic.getByUID('base','base')
    const link: LinkField = bases.data.insta
    const link1: LinkField = bases.data.twitter
    const link2: LinkField = bases.data.myanimelist
    return(
        <footer className={styles3.footer}>
            <h1>Se quiser uma conversa:</h1>
            <div>
            <PrismicLink field={link}>
            <img src='/instagram.svg'/>
            </PrismicLink>
            <PrismicLink field={link1}>
            <img src='/X.svg'/>
            </PrismicLink>
            <PrismicLink field={link2}>
            <img src='/ma.png' height='25px' width='25px' />
            </PrismicLink>
            </div>
            <h2>Copyright =<br></br>Produção: David Moura<br></br>Chata do Design: Luana Saboia</h2>
        </footer>
    )
}

export default Pe