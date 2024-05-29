import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: auto;
  width: auto;
  background-color: transparent;
  border: none;

  .moreArticle,
  .viewAll,
  .subscribe {
    width: fit-content;
    display: flex;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: 700;
    border-radius: 8px;

    transition: background 0.4s, color 0.4s;
  }

  .moreArticle,
  .viewAll {
    background-color: var(--bg-primary);
    color: var(--primary-text-color);
    border: solid 1px var(--btn-border-color);
  }

  .moreArticle {
    padding: 12px 14px;
  }

  .viewAll {
    padding: 8px 12px;
  }

  .subscribe {
    padding: 12px 14px;
    background-color: var(--bg-btn);
    color: var(--bg-primary);
    border: solid 1px transparent;
  }

  .subscribe:hover {
    background-color: var(--bg-primary);
    color: var(--btn-bg);
    border-color: var(--btn-bg);
  }

  .moreArticle:hover {
    background-color: var(--bg-btn);
    color: var(--bg-primary);
    border-color: var(--bg-btn);
  }

  .viewAll:hover {
    background-color: var(--bg-btn);
    color: var(--bg-primary);
    border-color: var(--bg-btn);
  }
`;
