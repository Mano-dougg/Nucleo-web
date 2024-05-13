import './secondary-section.css'

export default function SecondarySection(){
    return(
        <section className='section'>
            <br className='section__bar'/>
            <h2 className='section__title'>Title</h2>
            <p className='section__text'>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            <article className='section__article'>
                <img className='section__article__image'></img>
                <div className='section__article__content'>
                    <h3 className='section__article__content__title'>Title</h3>
                    <p className='section__article__content__text'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <button className='section__article__content__button'></button>
                </div>
            </article>
            <article className='section__article'>
                <div className='section__article__content'>
                    <h3 className='section__article__content__title'>Title</h3>
                    <p className='section__article__content__text'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <button className='section__article__content__button'></button>
                </div>
                <img className='section__article__image'></img>
            </article>
        </section>
    )
}