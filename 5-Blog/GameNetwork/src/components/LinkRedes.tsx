//-- GERAL
import React from 'react';
import { AiOutlineGithub, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';


//-- FUNCTION
export default function ISocial(rede_social: string): React.JSX.Element {

  switch (rede_social) {
    case 'Instagram':
      return <AiOutlineInstagram />;
    case 'E-mail':
      return <AiOutlineMail />;
    case 'LinkedIn':
      return <AiOutlineLinkedin />;
    case 'GitHub':
      return <AiOutlineGithub />;
    case 'Whatsapp':
      return <AiOutlineWhatsApp />;
    default:
      return <AiOutlineGlobal />;
  };
};