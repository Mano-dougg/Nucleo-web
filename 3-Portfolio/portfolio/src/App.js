/* Since the figma is in English, i'll name everything in English instead of Portuguese*/
import CheckLight from "./images/check-light.svg"
import TwitterLight from "./images/twitter-light.svg"
import FigmaLight from "./images/figma-light.svg"
import InstagramLight from "./images/instagram-light.svg"
import "./App.css"


function NavLeft() {
  return (
    <div className="NavLeft">
      <h1 className="Name">Alfabeto</h1>
      <NavLeftSections />
    </div>
  )
}

function NavLeftSections() {
  return (
    <div className="NavLeftSections">
      <p>Section two</p>
      <p>Section three</p>
      <p>Section four</p>
    </div>
  )
}

function Icons() {
  return (
  <div className="Icons">
    <a href="https://x.com/kaisenbackup" target="_blank" rel="noreferrer noopener"><img src={TwitterLight} alt="Twitter"></img></a>
    <a href="https://www.youtube.com/watch?v=-BljfHCHSZY" target="_blank" rel="noreferrer noopener"><img src={FigmaLight} alt="Figma"></img></a>
    <a href="https://www.instagram.com/noeldeyzel_bodybuilder/" target="_blank" rel="noreferrer noopener"><img src={InstagramLight} alt="Instagram"></img></a>
  </div>
  )
}

function DarkMode() {
  const toggleFocus = (event) => {
    event.currentTarget.classList.toggle('focus');
  };

  return (  
    <div className="DarkMode">
      <p>Dark mode:</p>
      <div className="DarkModeButton" onClick={toggleFocus}>
        <figure className="DarkModeButtonCircle"></figure>
      </div>
    </div>
  )
}

function NavRight() {
  return (
    <div className="NavRight">
      <Icons />
      <DarkMode />
    </div>
  )
}

function Nav() {
  return (
    <nav className="Nav">
      <NavLeft />
      <NavRight />
    </nav>
  )
}

function MenuContent() {
  return (
    <div className="MenuContent">
        <div className="NavLeftSectionsPhone">
          <p>Section two</p>
          <p>Section three</p>
          <p>Section four</p>
        </div>
        <div className="IconsPhone">
          <a href="https://x.com/kaisenbackup" target="_blank" rel="noreferrer noopener"><img src={TwitterLight} alt="Twitter" height="22px" width="22px"></img></a>
          <a href="https://www.youtube.com/watch?v=-BljfHCHSZY" target="_blank" rel="noreferrer noopener"><img src={FigmaLight} alt="Figma" width="13px" height="18px"></img></a>
          <a href="https://www.instagram.com/noeldeyzel_bodybuilder/" target="_blank" rel="noreferrer noopener"><img src={InstagramLight} alt="Instagram" width="16px" height="18px"></img></a>
        </div>

    </div>
  )
}

function Menu() {
  const toggleClasses = () => {
    const menu = document.querySelector('.Menu');
    const menuContent = document.querySelector('.MenuContent');
    
    menu.classList.toggle('active');
    menuContent.classList.toggle('active');
  };

  return (
    <nav className="Menu" onClick={toggleClasses}>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  )
}

function Hello() {
  return (
    <div className="ProfileAndHello">
      <div className="Relativator">
        <img src={require("./images/profile-light.png")} className="Profile" alt="Profile"></img>
        <img src={require("./images/profile-dark.jpeg")} className="ProfileDark" alt="Profile"></img>
      </div>
      <h1 className="Hello">Hello.<br />I am Alfabeto.</h1>
    </div>
  );
}

function Paragraph() {
  return (
    <div>
  <br /><p className="Paragraph" style={{marginTop: "60px"}}>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. <br /><br />
  Right now, I'm Design Lead at <span class="Span">Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span class="Span">design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.<br /><br />
  I've got some <span class="Span">work on Dribbble</span>, some previous work at <span class="Span">Saga</span> and you can find me over on twitter and sometimes <span class="Span">on Medium too</span>. I also take <span class="Span">too many photos.</span></p>
</div>)}

function CallOut() {
  return (
    <div className="Callout">
      <img src={CheckLight} alt="Checkmark"></img>
      <p>Available for work and general design goodness – <span class="Span">say hello</span></p>
    </div>)
}

function Section1() {
  return (
    <section className="Section">
      <Hello />
      <hr className="HrSmall"></hr>
      <Paragraph />
      <CallOut />    
    </section>
  )
}

function Article1() {
  return (
  <article className="Article">
    <img src={require('./images/gojo.jpeg')} alt="Gojo Satoru preparing to fight Sukuna" className="ArticleImage"></img>
    <img src={require("./images/sukuna.jpeg")} alt="Sukuna preparing to fight Gojo Satoru" className="ArticleImageDark"></img>
    <div>
      <h3 className="ArticleTitle">Title</h3>
      <p className="Paragraph">Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
      <a href="https://www.youtube.com/watch?v=zWW75icDzCE" target="_blank" rel="noreferrer noopener"><button className="ArticleButton">Button Primary Light</button></a>
    </div>
  </article>)
}

function Article2() {
  return (
  <article className="Article2">
    <img src={require('./images/superman.jpeg')} alt="Superman sitting on the clouds" className="ArticleImage"></img>
    <img src={require("./images/batman.jpeg")} alt="Batman crouching in the shadows" className="Article2ImageDark"></img>
    <div>
     <h3 className="ArticleTitle">Title</h3>
     <p className="Paragraph">Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
     <a href="https://www.youtube.com/shorts/K5WqDkidNPw" target="_blank" rel="noreferrer noopener"><button className="ArticleButton">Button Primary Light</button></a>
    </div>
  </article>)
}

function Section2() {
  return (
    <section className="SectionWithTopBorder">
      <h2><span class="Span">Title</span></h2>
      <p className="Paragraph">Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
      <Article1 />
      <Article2 />
    </section>
  )
}

function Main() {
  return(
  <main className="Main">
    <Menu />
    <Section1 />
    <Section2 />
  </main>)
}

export default function Portfolio() {
  return (
    <body className="Body">
      <Nav />
      <MenuContent />
      <Main />
    </body>
  );
}
