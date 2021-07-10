import styled from "styled-components";
import imageRegister from "../../asssets/images/image-register.png";

export const ContainerRegister = styled.div`
  margin-top: -77px;
  min-height: 100vh;
  display: flex;
  #description {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    #description {
      display: block;
    }
  }
`;

export const ContainerRegisterForm = styled.div`
  flex: 9;
  align-self: center;
  padding: 77px 0;

  @media screen and (min-width: 1024px) {
    flex: 7;
  }
`;

export const ContainerDescription = styled.div`
  flex: 7;
  background-image: url(${imageRegister});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  div {
    text-align: left;
    max-width: 500px;
    padding: 0 20px;
    margin: 110px auto auto 66px;

    h2 {
      font-family: Oswald;
      font-size: 2rem;
      color: var(--green);
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
    }
    p {
      margin-top: 13px;
      font-family: Lato;
      font-size: 1rem;
    }
  }
`;
