import styled from "styled-components";

interface TaskProps {
  past: boolean;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 1.4rem;
    color: var(--dark-gray);
    font-weight: 500;
    text-align: left;
    padding: 0.5rem 0;
  }
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  overflow-x: scroll;

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
`;

export const Calendar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-bottom: 1rem;
`;

export const WeekDay = styled.div`
  width: 150px;
  height: 220px;
  border-right: 1px solid var(--gray);

  &:last-child {
    border-right: none;
  }

  h3 {
    width: 100%;
    border-bottom: 2px solid var(--gray);
    text-align: center;
    padding: 0.5rem 0;
    font-weight: 400;
    font-family: var(--font-secondary);
  }

  @media screen and (min-width: 720px) {
    width: 140px;
    height: 270px;
  }
`;

export const DayTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(220px - 57px);
  padding: 12px 0;

  @media screen and (min-width: 720px) {
    height: calc(270px - 57px);
  }
`;

export const Task = styled.div`
  background-color: ${(props: TaskProps) =>
    props.past ? "#A62E2E" : "var(--green)"};
  color: var(--white);
  text-align: center;
  padding: 8px 4px;
  border-radius: 8px;
  width: 130px;
  box-shadow: 2px 0px 10px -1px rgba(0, 0, 0, 0.3);
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  p {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 720px) {
    width: 125px;

    p {
      font-size: 0.9rem;
    }
  }
`;
