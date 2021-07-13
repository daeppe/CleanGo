import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  h2 {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 1.3rem;
    color: var(--dark-gray);
    font-weight: 500;
    text-align: left;
    padding: 0.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 25% 25%;
  align-items: center;
  border-bottom: 2px solid var(--gray);
  padding: 8px 0;
  transition: all 250ms;

  &:hover:not(:first-of-type) {
    background-color: rgba(250, 250, 250, 0.45);
    cursor: pointer;
  }
`;

export const TitleTable = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
`;

export const TableRow = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;
