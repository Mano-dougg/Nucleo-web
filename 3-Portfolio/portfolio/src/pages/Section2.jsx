import placeHolder from '../assets/images/ImagePlaceholder-light.svg'
import '../assets/styles/Section2.css'

function Section2() {
    return (
      <>
        <section className='container'>
          <hr id='division'/>
          <div className="Center">
              <h2>Title</h2>
              <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
              <section className='sub'>
                  <img src={placeHolder} alt="Placeholder" />
                  <div>
                      <h4>Title</h4>
                      <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                      <button>Buttom Primary Light</button>
                  </div>
              </section>
              <section className='sub'>
              <div>
                  <h4>Title</h4>
                      <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                      <button>Buttom Primary Light</button>
                  </div>
                  <img src={placeHolder} alt="Placeholder" />
              </section>
          </div>
        </section>
      </>
    );
  }

export default Section2
