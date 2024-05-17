import './Section2.css'
import imgRandom from '../assets/img/img-random.svg'
import imgRandom2 from '../assets/img/img-random2.svg'

function Section2() {

    return (
        <>
            <section className='main-content-s2'>
                <span className='full-line'></span>
                <h2>Title</h2>
                <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.</p>
                <article className='article-1'>
                    <img src={imgRandom} alt="imagem de " />
                    <div className='side-content'>
                        <h3>Title</h3>
                        <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                        <button></button>
                    </div>
                </article>
                <article className='article-2'>
                    <img src={imgRandom2} alt="" />
                    <div className='side-content-2'>
                        <h3>Title</h3>
                        <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                        <button></button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Section2;