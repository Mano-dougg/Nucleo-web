import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="darkmode-button"
      onClick={() => setToggled(!toggled)}
    >
      <span className="darkmode-text">Dark mode:</span>
      <button
        className={`toggle-darkmode ${toggled ? "toggled" : ""}`}
      >
        <div className='thumb'></div>
      </button>
    </div>
  );
};

export default ToggleButton;