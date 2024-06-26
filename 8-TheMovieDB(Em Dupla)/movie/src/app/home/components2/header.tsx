// app/components2/header.tsx

import React from 'react';
import Netflix from '../../../../img/netflix.jpg';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  user: {
    name: string;
    email: string;
  } | null;
}

const Tagheader = styled.header`
  font-size:20px;
  position: sticky;
  top: 0;
  height: auto;
  min-height: 70px;
  z-index: 1;
  background-color: #black;
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

`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/home';
    window.location.reload(); 
  };

  const handleLogin = () => {
    window.location.href = '/'; // 
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
      {user ? (
        <UserContainer>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <UserName>{user.name}</UserName>
          <Options>
            <p onClick={handleLogout} >logout</p>
          </Options>
        </UserContainer>
      ) : (
        <p onClick={handleLogin}>Login</p>
      )}
    </Tagheader>
  );
};

export default Header;
