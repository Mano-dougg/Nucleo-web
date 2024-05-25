import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;