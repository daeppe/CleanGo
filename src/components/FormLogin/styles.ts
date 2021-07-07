import styled from "styled-components";
export const ContainerForm = styled.div`
  width: 410px;
  margin: 0 auto;
  padding: 0px 37px;
  display: flex;
  font-family: Lato;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 1rem;
    @media only screen and (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
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
