import React from 'react';
import { FaTwitter, FiFigma, FaInstagram } from "react-icons/fa";
import '../App.css';

export const Header = () => {
  return (
    <header>
      <section className='menu'>
        <nav>
          <div className="section">
            <ul>
              <li><h1>Carlos Eduardo</h1></li>
              <li><a href="#">Section One</a></li>
              <li><a href="#">Section Two</a></li>
              <li><a href="#">Section Three</a></li>
            </ul>
          </div>
          <div className="icon">
            <ul className="menu_itens">
              <li><a href=""><FaTwitter className='icone'/></a></li>
              <li><a href=""><FiFigma className='icone'/></a></li>
              <li><a href=""><FaInstagram className='icone'/></a></li>
            </ul>
          </div>
        </nav>
      </section>
    </header>
  );
}