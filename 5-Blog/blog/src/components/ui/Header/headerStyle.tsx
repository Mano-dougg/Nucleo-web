import styled from "styled-components";

const media = {
    mobile: `@media (max-width:750px)`,
    tablet: `@media (max-width:995px)`,
  }

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 0;

  ${media.tablet}{
    padding: 100px 0;
  }
`;

export const HeaderContent = styled.div`
  max-width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px 12px;

  h1 {
    font-size: 4.75rem;
    font-weight: bold;
    background: var(--title-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 1.75rem;
    color:var(--secondary-text-color);
    font-weight: normal;
  }

  h1,h3{
    text-align: center;
  }

  ${media.tablet}{
    h1{
        font-size:2.875rem;
    }

    h3{
        font-size: 1.5rem;
    }
  }

  ${media.mobile}{
    h1{
        font-size: 1.75rem;
    }

    h3{
        font-size:1.125rem;
    }
  }
`;
