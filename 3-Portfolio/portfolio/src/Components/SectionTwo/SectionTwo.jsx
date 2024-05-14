import './sectiontwo.css'
import WeLoveDogs from '../../assets/welovedogs.png';
import PlantCard from '../../assets/plantcard.png';

const SectionTwo = () => {
    return (
      <>
        <section className="sectiontwo">
          <h2>Projects</h2>
          <p>In this section, you can check out the last two projects prepared for the InfoJR selection process! </p>

          <div className="card">
            <img className='card-img' src={WeLoveDogs}/>

            <div className="card-content">
              <h3>WeLoveDogs</h3>
              <p>Creation of a simple page, using HTML and CSS, encouraging the adoption of new puppies, with 4 different pages: Home, Blog, About and Contact.

              </p>

              <a href='http://127.0.0.1:5500/1-WeLoveDogs/home.html' target='_blank' ><button className='card-btn'>Check it Out!</button></a>
            </div>
          </div>

          <div className="card" id='second'>
            <div className="card-content">
                <h3>PlantCard</h3>
                <p>In this project, a card was created simulating the stimulus of decorating houses with plants, also using HTML and CSS. However, as a differential, JavaScript is used to make the hamburger menu appear when the arrow in the bottom right corner of the card is clicked.

                </p>

                <a href='http://127.0.0.1:5500/2-PlantCard/index.html' target='_blank'><button>Check it Out!</button></a>
            </div>

            <img className='card-img' id='plantcard' src={PlantCard}/>
          </div>
        </section>
      </>
    )
}

export default SectionTwo