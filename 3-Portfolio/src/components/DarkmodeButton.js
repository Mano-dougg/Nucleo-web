import React, { useState, useEffect } from 'react';
import './DarkmodeButton.css';

const DarkmodeButton = () => {
  const [isDark, setDark] = useState(false);

  const toggleDarkmode = () => {
    setDark(!isDark);
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : '');
  }, [isDark]);

  return (
    <div className="darkmode-button"
      onClick={ toggleDarkmode }
    >
      <span className="darkmode-text">Dark mode: {isDark}</span>
      <button
        className={`toggle-darkmode ${isDark ? "toggled" : ""}`}
      >
        <div className='thumb'></div>
      </button>
    </div>
  );
};

export default DarkmodeButton;