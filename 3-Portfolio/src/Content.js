import React from 'react';

function Content({ isOpen }) {
    return (
      <div id="content" className={isOpen ? 'open' : ''}>
        <section id="section-two">
          <img id="avatar" src="images/kevin.png" alt="Kevin's avatar" />
          <h1 id="introduction">Hello. <br />My name is Kevin.</h1>
          <span id="first-separation" className="separation"></span>
          <p>
            I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
            <br /><br />Right now, I'm Design Lead at <span className="highlight">Holiday Extras</span> , covering all our digital platforms across a whole load of brands – 
            leading a great team across <span className="highlight">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, 
            PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. <br /><br />I've got some work on Dribbble, some previous 
            work at Saga and you can amongst others – testing, iterating and optimising our platforms and products. I've got some <span className="highlight">work on Dribbble</span>, some previous work 
            at <span className="highlight">Saga</span> and you can find me over on twitter and sometimes <span className="highlight">on Medium too</span>. I also take <span className="highlight">too many photos</span>.
          </p>
          <div id="callout">
            <i className="fa fa-check-circle" /><p>Available for work and general design goodness - <a href="#" id="callout-hello">say hello</a></p>
          </div>
        </section>
        <section id="section-three">
            <span className="separation"></span>
        </section>
      </div>
    );
  }
  

export default Content;
