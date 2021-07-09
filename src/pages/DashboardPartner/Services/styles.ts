import styled from "styled-components";

export const ContainerServices = styled.div`
  display: grid;
  gap: 10px 10px;
  justify-content: center;
  align-content: space-evenly;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 170px);
    grid-template-rows: repeat(3, 250px);
    gap: 0 0;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 170px);
    grid-template-rows: repeat(3, 250px);
    margin-left: 128px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 170px);
    grid-template-rows: repeat(3, 250px);
    margin-left: 128px;
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(6, 170px);
    grid-template-rows: repeat(3, 250px);
    margin-left: 128px;
  }
  @media only screen and (min-width: 1920px) {
    grid-template-columns: repeat(9, 170px);
    grid-template-rows: repeat(3, 250px);
    margin-left: 128px;
  }
`;
