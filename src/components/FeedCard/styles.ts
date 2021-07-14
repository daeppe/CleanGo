import styled from "styled-components";

export const FeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  max-width: 700px;
  background-color: var(--white);
  padding: 50px;
  height: 92vh;
  margin-right: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 25px 25px 0px 0px;
  
  > div{
    overflow-y: auto;
    width: 100%;
    height: 80%;
    margin-top: 30px;
    ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #bec9bd 14%, #919990 64%);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #546652 14%, #313630 64%);
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 8.2px 10px 12px 0px #f0f0f0;
  }
  }
  
  
  button {
    align-self: flex-end;
    margin-top: 0.7rem;
  }
`;

export const CardFeed = styled.section`
  img{
    width: 20px;
    cursor: pointer;
  }
  
`;

export const InputFeed = styled.input`
  background: rgba(255, 255, 255, 0.75);
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
  &::placeholder {
    position: absolute;
    color: var(--gray);
    padding: 0.5rem;
    font-size: 1.3rem;
  }
`;

export const FeedPost = styled.div`
width: 100%;
font-size: 1.2rem;
margin: 30px auto;
hr{
  width: 80%;
  border: 1px solid ;
}
`;