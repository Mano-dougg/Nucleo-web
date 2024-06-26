import React, { useState } from 'react';
import Netflix from '../../../../img/netflix.jpg';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone de busca

interface HeaderProps {
  user: {
    name: string;
    email: string;
  } | null;
}

const Tagheader = styled.header`
  font-size: 20px;
  position: sticky;
  top: 0;
  height: auto;
  min-height: 70px;
  z-index: 1;
  background-color: #000; /* Cor corrigida para preto (#000) */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-family: 'Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Ubuntu', sans-serif;
  color: #fff;
  
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav li {
    margin-right: 20px;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #e50914;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0 10px;
    cursor: pointer;
  }

  .user-icon {
    margin-right: 5px;
  }

  /* Estilo para o campo de pesquisa */
  .search-container {
    display: flex;
    align-items: center;
    background-color: #333;
    padding: 5px;
    border-radius: 5px;
    margin-left: 10px;
  }

  .search-input {
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
    margin-left: 5px;
    width: 150px;
    outline: none;
  }

  .search-input::placeholder {
    color: #ccc;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap:10px;
`;


const UserName = styled.p`
  margin: 0 10px;
  cursor: pointer;
`;

const Options = styled.div`
  display: none;
  top: calc(100% + 10px);
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;

  ${Tagheader}:hover & {
    display: block;
  }
`;

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/home';
    window.location.reload(); 
  };

  const handleLogin = () => {
    window.location.href = '/'; // Redireciona para a página inicial após o login
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Aqui você pode implementar a lógica para realizar a pesquisa conforme o termo digitado
  };

  return (
    <Tagheader>
      <Image src={Netflix} alt="Netflix Logo" width={100} height={50} />
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/">Series</a></li>
          <li><a href="/">Filmes</a></li>
          <li><a href="/">Minha Lista</a></li>
          
        </ul>
      </nav>
      <UserContainer>
      <div className="search-container">
          <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {user ? (
          <>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <UserName>{user.name}</UserName>
            <Options>
              <p onClick={handleLogout}>Logout</p>
            </Options>
          </>
        ) : (
          <p onClick={handleLogin}>Fazer Login <FontAwesomeIcon icon={faUser} className="user-icon" /></p>
        )}
        
      </UserContainer>
    </Tagheader>
  );
};

export default Header;
