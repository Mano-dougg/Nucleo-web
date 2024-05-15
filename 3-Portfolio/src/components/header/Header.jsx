import ListItem from './ListItem';
import SectionListItem from './SectionListItem';
import twitterIcon from '../../assets/twitter-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import toggleIcon from '../../assets/toggle-icon.svg';
import './style.css';

function Header() {
  return (
    <header>
      <section className="container-section">
        <h1>Arthur Batista</h1>
        <nav>
          <ul>
            <SectionListItem text="Section two" />
            <SectionListItem text="Section three" />
            <SectionListItem text="Section four" />
          </ul>
        </nav>
      </section>
      
      <section className="container-socials">
        <nav className="social-bar">
          <ul>
            <ListItem icon={twitterIcon} alt="Twitter" />
            <ListItem icon={figmaIcon} alt="Figma" />
            <ListItem icon={instagramIcon} alt="Instagram" />
          </ul>          
        </nav>
        <nav className="theme">
          <p>Dark Mode:</p>
          <ul>
            <ListItem icon={toggleIcon} alt="Toggle" />
          </ul>
        </nav>
      </section>
      
    </header>
  );
}

export default Header;
