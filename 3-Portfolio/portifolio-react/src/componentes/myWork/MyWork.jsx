import './styles.css';
import placeholder from '../../assets-light-theme/placeholder.png'

function MyWork({ isMenuActive }) {

    return (
        <section className={`my-work ${isMenuActive ? 'hidden' : ''}`}>
            <div className='line-wide'></div>

            <section id='section2'>
                <h1>Seção 2</h1>
                <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                    Line of copy in here to decribe this section.</p>
            </section>

            <section id='section3'>

                <img className='placeholder-img' src={placeholder}/>

                <div className='info'>
                    <h1>Seção 3</h1>
                    <p>Leading, implementing and evolving engaging customer experiences 
                        and UI foundations for every touch-point across various platforms.</p>
                        <button className='btn'>Button Primary Light</button>
                </div>    
                
            </section>

            <section id='section4'>

                <div className='info'>
                    <h1>Seção 4</h1>
                    <p>Leading, implementing and evolving engaging customer experiences 
                        and UI foundations for every touch-point across various platforms.</p>
                    <button className='btn'>Button Primary Light</button>
                </div>  

                <img className='placeholder-img' src={placeholder}/>

            </section>

        </section>
    );
}

export default MyWork;