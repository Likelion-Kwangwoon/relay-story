import styled from "styled-components"

export const Btn = styled.button`
  background-color: ${(props) => props.theme.color.main};
  padding: 14px 0;
  font-size: 1.2rem;
  color: ${props => props.theme.text.black};

  &.main {
    width: 178px;
    border-radius: 10px;
  }

  &.fix {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
    @media screen and (max-width: 500px) {
      bottom: 5%;
    }
  }

  &.next {
    width: 88px;
    border-radius: 10px;
  }
`;

export default function Button({className, text, onClick}) {
  return (
    <Btn onClick={onClick} className={className}>
      {text}
    </Btn>
  );
}
