import styled from "styled-components";
export const ContainerForm = styled.div`
  width: 410px;
  margin: 70px auto;
  padding: 0px 37px;
  display: flex;
  font-family: Lato;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: normal;
    @media only screen and (min-width: 768px) {
      font-size: 48px;
    }
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    text-align: start;
    margin-bottom: 20px;
    #link {
      font-style: normal;
      font-weight: bold;
      color: var(--black);
    }
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .containerButton {
    text-align: right;
  }
`;
