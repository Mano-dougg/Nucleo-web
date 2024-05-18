import './App.css';
import avatar from './assets/avatar.png';
import checkCircle from './assets/check-circle-solid-light.png';
import frankocean from './assets/frankocean.png';
import navbrand from './assets/nav-brand.png';
import imagePost from './assets/img-placeholder.png';

import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div class="container">
        <nav class="nav">
          <section class="navleft">
            <h4 class="brand">Maurício Matchal</h4>
            <div class="labels">
              <a href="" className='label'>Section two</a>
              <a href="" className='label'>Section three</a>
              <a href="" className='label'>Section four</a>
            </div>
          </section>
          <section class="navright">
            <ul class="social-icons">
              <li class="icon-item" className='accent-color'><FaTwitter className="Icon" size={22}/></li>
              <li class="icon-item" className='accent-color'><IoLogoFigma className="Icon" size={22}/></li>
              <li class="icon-item" className='accent-color'><FiInstagram className="Icon" size={22}/></li>
            </ul>
            <button className="darkmode">Dark Mode</button>
          </section>
        </nav>
        <main class="main">
          <section class="scrollview">
            <div class="section1">
              <img id="avatar" src={frankocean} alt="portifolio picture"></img>
              <h1 className='accent-color'>Hello.<br></br>
                My name is Curício Cutchal.</h1>
            </div>

            <div class="dividerplaceholder">
              <div role="divider" class="divider-s"></div>
            </div>

            <div class="section2">
              <p class="portfolio-description">
                I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.<br></br><br></br> Right now, I'm Design Lead at <strong class="highlight">Holiday Extras</strong>, covering all our digital platforms across a whole load of brands – leading a great team across <strong class="highlight">design</strong>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.<br></br><br></br> I've got some <strong class="highlight">work on Dribble</strong>, some previous work at <strong class="highlight">Saga</strong> and you can find me over on twitter and sometimes <strong class="highlight">on Medium too</strong>. I also take <strong class="highlight">too many photos</strong>.
              </p>
              <span class="callout">
                <img src={checkCircle} alt="check icon"></img>
                <p class="callout-text">Available for work and general design goodness – <strong class="highlight">say hello</strong></p>
              </span>
            </div>

            <div role="divider" class="divider-l"></div>
            
            <div class="section3">
              <h2 className='accent-color'>Title</h2>
              <p class="portfolio-description">
                Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
              </p>
              <div className='post'>
                <img src={imagePost} alt="" className="post-image" />
                <div className="post-content">
                  <h3 className='accent-color'>Title</h3>
                  <p className='post-description'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                  <button className='button-primary'>Button Primary Light</button>
                </div>
              </div>
              <section className='post'>
                <div className="post-content">
                  <h3 className='accent-color'>Title</h3>
                  <p className='post-description'>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                  <button className='button-primary'>Button Primary Light</button>
                </div>
                <img src={imagePost} alt="Post Image" className="post-image" />
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
