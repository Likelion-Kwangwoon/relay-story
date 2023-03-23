import imgLogo from "../../assets/logo.svg"
import styled from "styled-components"

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
  return (
    <>
        <Title className={className}>
          <p>짱돌</p>
          <img src={imgLogo} alt="" />
        </Title>
    </>
  )
}
