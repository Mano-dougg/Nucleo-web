import styled from "styled-components";

const media = {
  mobile: `@media (max-width: 670px)`,
  mobile2:`@media (max-width:740px)`
};

export const Carde = styled.div`
  max-width: 980px;
  height: 260px;
  border: solid 1px transparent;
  border-radius: 20px;
  padding: 24px 20px;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  transition: border-color 0.2s;

  &:hover {
    border-color: var(--border-color);
  }

  img {
    max-width: 300px;
    max-height: 212px;
    border-radius: 10px;
    object-fit: cover;
  }

  ${media.mobile} {
    max-height: auto;
    height: auto;
    width: auto;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    overflow-y: hidden;

    img {
      max-width: 100%;
      width: 100%;
      max-height: 170px;
      border-radius: 0 0 20px;
    }
  }
`;



export const CardTextContent = styled.div`
  height: 100%;
  max-width: 610px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  span {
    width: 100%;
    font-size: 0.813rem;
    text-transform: uppercase;
    color: var(--card-data-color);
    text-align: start;
    font-weight: 700;
  }
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1.625rem;
    color: var(--primary-text-color);
  }

  p {
    font-size: 1.125rem;
    color: var(--secondary-text-color);
  }

  h3,
  p {
    width: 100%;
    text-align: start;
  }

  ${media.mobile2}{
    h3 {
      font-size: 1.275rem;
    }

    p {
      font-size: 1rem;
    }
  }

  ${media.mobile} {
    p {
      display: none;
    }
  }
`;
