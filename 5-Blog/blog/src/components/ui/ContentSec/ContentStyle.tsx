import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 80px 10px;

  background-color: var(--bg-posts);
`;

export const ContentCards = styled.section`
  width: fit-content;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 0px;
`;

export const ContentHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;

  span {
    font-size: 1.625rem;
    font-weight: 700;
    color: var(--primary-text-color);
  }
`;
