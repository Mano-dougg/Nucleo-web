import '../styles/Navigation.css'
import Images from  './SocialMedia'

function Navigation() {
  return (
    <header>
      <div className="left">
        <h2>Igor Spínola</h2>
        <div className="sections">
          <div>Section two</div>
          <div>Section three</div>
          <div>Section four</div>
        </div>
      </div>
      <div className="right">
        <nav>
          <Images />
        </nav>
        <div className="dark">
          <div>Dark mode:</div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </div>
    </header>
  )
}

export default Navigation;
