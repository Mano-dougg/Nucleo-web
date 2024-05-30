import styled from "styled-components";

const media = {
  mobile: `@media (max-width:750px)`,
  tablet: `@media (max-width:995px)`,
}


export const Posts = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostContent = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 190px;

  ${media.tablet}{
    padding: 0 80px;
  }

  ${media.mobile}{
    padding: 0 20px;
  }


  img {
    width: 100%;
    max-height: 580px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const PostText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding:50px 0;

  p {
    font-size: 1.4rem;
    color: var(--primary-text-color);
    max-width: 680px;
    text-align: start;
    text-align: center;
  }

  img {
    max-width: 780px;
    max-height: 490px;
    object-fit: cover;
  }

  h1{
    font-size: 2rem;
    color: var(--primary-text-color);
  }
`;
