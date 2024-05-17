import './secondary-section.css'
import firstImage from './leorio-estudando.jpeg'
import secondImage from './leorio-socando.jpg'

function Post({ order, imageLink, description}){
    return(
        <article className={order}>
            <div className='article__image'>
                <img src={imageLink} className='post-image' alt={description}></img>
            </div>    
            <div className='article__content'>
                <h3 className='article__content__title title'>Title</h3>
                <p className='article__content__text'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button className='article__content__button border colored'>Button Primary Light</button>
            </div>
        </article>
    )
}

export default function SecondarySection(){
    return(
        <section className='secondary-section section'>
            <div className='secondary-section__bar break'/>
            <h2 className='secondary-section__title title'>Title</h2>
            <p className='secondary-section__text'>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            <Post 
            order='article' 
            imageLink={firstImage}
            description='A man with a white button-shirt and glasses studying studying. (It is Leorio from HunterXHunter)'
            />
            <Post 
            order='article reverse' 
            imageLink={secondImage}
            description='A well dressed man with glasses and an angry expression preparing to punch someone as energy aura exhales from its hands. (It is Leorio from HunterXHunter)'
            />
        </section>
    )
}