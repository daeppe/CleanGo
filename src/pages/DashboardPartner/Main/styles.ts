import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 0 1rem 100px;
  display: grid;
  grid-template-columns: 90vw;
  justify-items: center;
  transition: all 350ms;
  grid-gap: 3rem;

  @media screen and (min-width: 720px) {
    padding: 0 1rem 0 150px;
    grid-template-columns: 40vw 1fr;
  }

  @media screen and (min-width: 980px) {
    grid-template-columns: 50vw 1fr;
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

export const FeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 700px;
  background-color: var(--white);
  padding: 50px;
  height: 100vh;
  margin-right: 30px;
  border-radius: 20px;
  p{
    margin-top: 30px;
  }
  button{
    align-self: flex-end;
    margin-top: 0.7rem
  }
`;

export const WrapperSections = styled.div`
  margin: 2rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputFeed = styled.input`
    background: rgba(255,255,255,0.75);
    border: 3px solid var(--green);
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    height: 100px;
    font-size: 1rem;
    font-family: var(--font-standard);
    padding: 0.5rem;
    -webkit-transition: all 300ms;
    transition: all 300ms;
    &::placeholder{
      position: absolute;
      color: var(--gray);
      padding: 0.5rem;
      font-size: 1.3rem;
    }
`;
