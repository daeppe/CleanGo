import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    bottom: 18px;
  }

  .ant-modal-header {
    background-color: var(--white);
    border-radius: 8px 8px 0 0;
    border-bottom: 2px solid var(--gray);
    font-family: var(--font-secondary);
  }

  .ant-modal-content {
    background-color: var(--white);
    border-radius: 8px;
  }

  .ant-modal-title {
    font-size: 1rem;
    font-weight: bold;
  }

  .ant-modal-body {
    border-radius: 0 0 8px 8px;
    padding: 8px;
  }

  .ant-modal-footer {
    border-radius: 8px;
  }

  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 460px) {
    .ant-modal-title {
      font-size: 1.1rem;
    }
  }
`;

export const ContentModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;

  h2 {
    font-weight: 700;
    font-size: 1.1rem;
    /* font-family: var(--font-secondary); */
    color: var(--dark-green);
  }

  li {
    font-size: 1rem;
  }

  h4 {
    font-weight: 700;
    font-size: 0.9rem;
  }
`;
