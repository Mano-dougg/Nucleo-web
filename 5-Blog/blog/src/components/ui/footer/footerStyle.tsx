import styled from "styled-components";

const media = {
    mobile: `@media (max-width:750px)`,
    tablet: `@media (max-width:995px)`,
  }

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const FooterForm = styled.form`
width:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 10px;
  gap: 20px;

  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    background: var(--title-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }


  p{
    font-size: 1.2rem;
    color:var(--secondary-text-color);
    font-weight: normal;
  }

  ${media.mobile}{
    h1{
        font-size: 1.5rem;
    }

    p{
        font-size: 1rem;
        text-align: center;
    }
  }
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;

    input,button{
        padding: 10px 24px;
        border:none;
        outline: none;
        font-size: 1rem;
        font-weight: 700;
    }

    button{
        border-radius: 0px 8px 8px 0;
        color:var(--bg-primary);
        background-color: var(--bg-btn);
    }

    input{
        border: solid 2px var(--btn-border-color);
        border-radius:8px 0px  0px 8px;
    }

    ${media.mobile}{
        button, input{
            font-size: 0.850rem;
        }
    }
`

export const PersonContainer = styled.div`
    padding: 60px 0;
    font-size: 1rem;
    color:var(--secondary-text-color);
    text-align: center;
`
