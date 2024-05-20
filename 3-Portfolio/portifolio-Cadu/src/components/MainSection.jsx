import React from 'react';
import foto from '../img/fotwed.png';
import walpper from '../img/pngdefundo.png';
import '../App.css';
export const MainSection = () => {
  return (
    <section className='sessaoPrincipal'>
        <section className='ConteudodaSessao' >
          <img src={foto} width="200px" className='MinhaFoto'>
          </img>

          <h2>
            Hello. <br></br>
            My Name is Carlos Eduardo
          </h2>

          <div className='Texto01'></div>
            <p>I'm a Digital Product and UI Designer - creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
            <br></br>
            <p>Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands - leading a great team across design,
            UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists - amongst others
            - testing, iterating and optimising our platforms and products.</p>
            <br></br>
            <p>I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>
          <div className='say'>
            <FaCheckCircle className='icone'/>
            <p>Available for work and general design goodness - <a href="#">say hello</a></p>
          </div>
        </section>

        <div className='LinhaSepara'></div>

        <section className='titulo0001'>
            <h2 className='ide'>Title</h2>
            <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
        </section>

          

        <section className="divimg">
            <div>
              <img className="img" src={walpper} width="300px"/>
            </div>

            <div>
              <h2>Title</h2>
              <br/>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button>Button Primary Light</button>
            </div>
        </section>

        <section className='divimgs'>
            <div>
              <img className="img" src={walpper} width="300px"/>
            </div>

            <div>
              <h2>Title</h2>
              <br/>
              <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              <button>Button Primary Light</button>
            </div>
        </section>
    </section> 
  );
}
