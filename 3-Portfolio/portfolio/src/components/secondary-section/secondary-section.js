import './secondary-section.css'
import firstImage from './leorio-estudando.jpeg'
import secondImage from './leorio-socando.jpg'

function Post({ order, imageLink, description, title, content}){
    return(
        <article className={order}>
            <div className='article__image'>
                <img src={imageLink} className='post-image' alt={description}></img>
            </div>    
            <div className='article__content'>
                <h3 className='article__content__title title'>{title}</h3>
                <p className='article__content__text'>{content}</p>
                <button className='article__content__button border colored backgrounder'>Button Primary Light</button>
            </div>
        </article>
    )
}

export default function SecondarySection(){
    return(
        <section className='secondary-section section'>
            <div className='secondary-section__bar break'/>
            <h2 className='secondary-section__title title'>Notícias sobre Leorio</h2>
            <p className='secondary-section__text'>Seção de noticias relacionadas a tudo que acontece na vida de Leorio Paradinight, um aspirante a medicina com coração puro!</p>
            <Post 
            order='article' 
            imageLink={firstImage}
            description='A man with a white button-shirt and glasses studying studying. (It is Leorio from HunterXHunter)'
            title='Estratégias de estudo'
            content='Descubra a melhor forma de estudar para o ENEM e garantir aquela medicina que você sempre sonhou. Nosso amigo Leorio vai mostrar que com calma e dedicação é possível conquistar seus sonho!'
            />
            <Post 
            order='article reverse' 
            imageLink={secondImage}
            description='A well dressed man with glasses and an angry expression preparing to punch someone as energy aura exhales from its hands. (It is Leorio from HunterXHunter)'
            title='Agressão por estresse'
            content='Homem de meia-idade local agride cidadão. "Eu não aguento mais estudar, minha mão doi de tanto escrever texto, eu acho que esse newton aí não era uma pessoa de Deus não..." alega o agressor, afirmando que o estresse o fez perder a mente e cometer o delito.'
            />
        </section>
    )
}