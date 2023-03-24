import imgLogo from "../../assets/logo.svg"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export const Title = styled.h1`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  font-size: 1.25rem;

  & > img {
    width: 26px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(70%, -70%);
  }

  &.main{
    font-size: 3.125rem;
    & > img {
      width: 45px;
    }
  }
`;

export default function Logo({className}) {
  const navigate = useNavigate()

  return (
    <>
        <Title className={className} onClick={() => navigate('/')}>
          <p>짱돌</p>
          <img src={imgLogo} alt="" />
        </Title>
    </>
  )
}
