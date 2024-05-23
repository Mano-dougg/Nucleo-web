import React from 'react';

interface ButtonHomeProps {
  text: string;
  onClick: () => void;
}

const ButtonHome: React.FC<ButtonHomeProps> = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonHome;
