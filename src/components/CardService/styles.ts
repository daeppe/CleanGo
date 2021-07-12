import styled from "styled-components";

export const Container = styled.div`
  width: 155px;
  height: 230px;
  border-radius: 14px;
  background-color: var(--white);
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.2);
  margin: 8px auto;
  padding: 16px;
  cursor: pointer;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 80px 60px 30px 60px;
  gap: 0px 0px;
  grid-template-areas:
    "service"
    "details"
    "hours"
    "value";
  justify-content: flex-start;
  align-items: center;

  h2 {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 1.3rem;
    color: var(--dark-gray);
    font-weight: 500;
    text-align: left;
    padding: 0.5rem;
    grid-area: service;
  }
  h3 {
    font-family: var(--font-standard);
    font-size: 18px;
    grid-area: hours;
    padding: 8px;
  }
  .price {
    font-size: 20px;
    font-weight: 700;
    grid-area: value;
    padding: 0;
  }
  li {
    font-family: var(--font-standard);
    font-size: 14px;
    padding: 8px 8px 0;
    grid-area: details;
  }
  span {
    color: var(--dark-gray);
    font-family: var(--font-standard);
    font-size: 12px;
  }
  div {
    grid-area: value;
    padding: 8px;
  }
`;
