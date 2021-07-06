import styled from "styled-components";
export const ContainerForm = styled.div`
  width: 410px;
  padding: 0px 37px;
  display: flex;
  font-family: Lato;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 36px;
    /* font-size: 48px; */
    font-style: normal;
    font-weight: normal;
  }
  p {
    font-style: normal;
    font-weight: normal;
    /* font-size: 16px; */
    font-size: 13px;
    text-align: start;
    margin-bottom: 20px;
    #link {
      font-style: normal;
      font-weight: bold;
      color: var(--black);
    }
  }
  .containerButton {
    text-align: right;
  }
`;
