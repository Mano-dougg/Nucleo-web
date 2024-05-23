// PrimeiraPagina.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const First: React.FC = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link to="/segunda">
        <button>Ir para a Segunda Página</button>
      </Link>

      <Link to="/terceira">
        <button id='add-btn'>Adicionar nova palavra</button>
      </Link>
    </div>
  );
};

export default First;
