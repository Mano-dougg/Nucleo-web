import { createClient } from '../../../prismicio'
import styles5 from './inferior.module.css'

async function Imagens(){
    const prismic = createClient()
    const autor = await prismic.getByUID('autor', 'autor')
    const fot1 = autor.data.foto1.url
    const fot2 = autor.data.foto2.url
    const fot3 = autor.data.foto3.url
    const image = typeof fot1 === 'string' ? fot1 : '';
    const image1 = typeof fot2 === 'string' ? fot2 : '';
    const image2 = typeof fot3 === 'string' ? fot3 : '';
    return(
        <>
        <div className={styles5.div}> 
        <figure>
            <img src={image}/>
            <img src={image1}/>
            <img src={image2}/>
        </figure>
        </div>
        </>
    )
}

export default Imagens