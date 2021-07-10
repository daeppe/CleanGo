import styled from "styled-components";
export const ContainerForm = styled.div`
  max-width: 510px;
  min-width: 280px;

  margin: 0 auto;
  padding: 0px 37px;
  display: flex;
  font-family: Lato;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 1rem;
    @media only screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    text-align: start;
    margin: 20px 0;

    #link {
      font-style: normal;
      font-weight: bold;
      color: var(--black);

      &:hover {
        text-decoration: underline;
      }
    }
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .containerButton {
    text-align: right;
  }
`;
