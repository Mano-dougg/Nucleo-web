/* eslint-disable react/prop-types */
import './Section2.css';

const Section2 = ({ darkMode }) => {
  return (
    <>
      <section className={`section2 ${darkMode ? 'dark-mode' : ''}`} id='section2'>
        <div className="hr2">
          <div className="espaco"></div>
          <div className="conteudo2">
            <h2>Title</h2>
            <p>Line of copy in here to describe this section. Line of copy in here to describe this section. Line of copy in here to describe this section. Line of copy in here to describe this section.</p>
          </div>

          <div className="conteudo2-2">
            <div className="conteudo2-colum1">
              <img src="/src/assets/img/img2.jpeg" style={{ width: '100%' }} alt="" />
            </div>
            <div className="conteudo2-colum2">
              <div className="text">
                <h3>Title</h3>
                <p>Leading, implementing, and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button>Button primary light</button>
              </div>
            </div>
          </div>

          <div className="conteudo2-3">
            <div className="conteudo2-colum1">
              <img src="/src/assets/img/img2.jpeg" style={{ width: '100%' }} alt="" />
            </div>
            <div className="conteudo2-colum2">
              <div className="text">
                <h3>Titless</h3>
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                <button>Button primary light</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2;
