import styled from "styled-components";
import imageLogin from "../../asssets/images/image-login.png";

export const ContainerLogin = styled.div`
  min-height: 100vh;
  display: flex;
  .form {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    .form {
      display: block;
    }
  }
`;
export const ContainerLoginForm = styled.div`
  flex: 8;
`;
export const ContainerDescription = styled.div`
  flex: 7;
  background-image: url(${imageLogin});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: -77px;
`;
