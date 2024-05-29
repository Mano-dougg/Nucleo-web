import styled from "styled-components";

const media = {
  mobile: `@media (max-width:750px)`,
  tablet: `@media (max-width:995px)`,
};

export const NavContainer = styled.nav`
  width: 100%;
  padding: 30px 68px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    font-family: "Lato", sans-serif;
  }
`;

export const NavActions = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 100px;

  input, img {
    display: none;
  }

  input[type="checkbox"]:checked ~ .evento {
    transform: translatex(450px);
  }

  ${media.tablet} {
    button {
      display: none;
    }

    ${media.mobile} {
      img {
        display: flex;
      }
    }
  }
`;

export const NavLinks = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 30px;
  transition: all 0.4s;

  a {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

 a:hover{
  background: var(--title-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 }

  ${media.mobile} {
    width: 100%;
    height: 100%;

    flex-direction: column;

    position: absolute;
    right: 0px;
    top: 15%;

    font-size: 1.375rem;
    
    z-index: 2;
    overflow-x: none;
  }
`;
