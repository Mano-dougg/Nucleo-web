import styled from "styled-components";

const media = {
  mobile: `@media (max-width:750px)`,
  tablet: `@media (max-width:995px)`,
};

export const AboutMeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 100px 0;

  .eu {
    border-radius: 50%;
  }

  ${media.tablet} {
    flex-direction: column;
    gap: 10px;
  }

  ${media.mobile}{
    .eu{
        display: none;
    }
  }
`;

export const AboutText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h3 {
    font-size: 1.25rem;
    text-align: start;
    color: var(--primary-text-color);
  }

  ${media.tablet} {
    width: 100%;
    max-width: 100%;
    padding: 10px;
    gap: 20px;

    h3 {
      text-align: center;
      font-size: 2rem;
    }
  }
`;

export const AboutTextPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h1 {
    font-size: 2.5rem;
    color: var(--primary-text-color);
    text-align: start;
  }

  h3 {
    font-weight: normal;
  }

  ${media.tablet} {
    padding: 0 10px;

    h1 {
      text-align: center;
      font-size: 2rem;
    }

    h3 {
      text-align: start;
      margin-top: 50px;
    }
  }
`;

export const AboutLinks = styled.div`
  display: flex;

  img {
    width: 30px;
    height: 30px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 25px;
  }
  ${media.tablet} {
    flex-direction: column;
    gap: 25px;

    div{
        justify-content: center;
    }

    img{
        width: 40px;
        height: 40px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-left: 20px;

  .btn1,
  .btn2 {
    border: none;
    outline: none;
    font-size: 1.375rem;
    font-weight: 600;
  }

  .btn1 {
    background-color: var(--bg-primary);
    border: solid 1px;
    border-image: var(--title-color);
    background: var(--title-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .btn2 {
    background: var(--title-color);
    padding: 8px 24px;
    border: solid 1px transparent;
    border-radius: 8px;
  }

  ${media.tablet} {
    justify-content: center;
    margin-top: 50px;
    gap: 30px;

    .btn2, .btn1{
        font-size:2rem;
    }
  }
`;
