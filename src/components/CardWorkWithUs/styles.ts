import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 32px 0;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ContainerInner = styled(Container)`
  flex-direction: column;
  margin: 0;
  justify-content: flex-start;
  border: 4px solid var(--dark-green);
  border-radius: 16px;
  max-width: 310px;
  height: 380px;
  h1 {
    font-family: var(--font-secondary);
    font-size: 24px;
    text-align: center;
    margin: -30px auto;
  }
  img {
    border: 4px solid var(--dark-green);
    border-radius: 50%;
    padding: 20px;
    background-color: var(--white);
    align-self: flex-end;
    margin-top: -30px;
    margin-right: -30px;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
  }
`;
