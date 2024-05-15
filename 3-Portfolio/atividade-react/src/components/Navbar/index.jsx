import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      clicked: false
    };
  }

  toggleDarkMode = () => {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode }, () => {
      if (this.state.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  };

  menuShow = () => {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "/src/assets/icons/menu-regular-24.png";
    } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "/src/assets/icons/x-regular-24.png";
    }
  }

  render() {
    const { darkMode } = this.state;

    return (
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>Eder Natan</h1>
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item"><a href="#" className="nav-link">Section two</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Section three</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Section four</a></li>
            </ul>
          </div>
          <div className="dark-button">
            <div className='itens_dark'>
              <p>Dark Mode :</p>
              <div className='itens_checkbox'>
                <input type="checkbox" className='checkbox' id="chk" checked={darkMode} onChange={this.toggleDarkMode} />
                <label className='label' htmlFor="chk">
                  <div className='ball'></div>
                </label>
              </div>
            </div>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={this.menuShow}><img src="/src/assets/icons/menu-regular-24.png" alt="" className="icon" /></button>
          </div>
        </nav>
        <div className="mobile-menu">
          <ul>
            <li className="nav-item"><a href="#" className="nav-link">Início</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
          </ul>
          <div className="dark-button">
            <button><a href="#">Dark Mode</a></button>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
