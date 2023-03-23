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

  &.next {
    width: 88px;
    border-radius: 10px;
  }

  &.copy {
    width: 68px;
    padding: 15px 0;
    border-radius: 50px;
    font-size: 16px;
  }
`;

export default function index({className, text, onClick}) {
  return (
    <Btn onClick={onClick} className={className}>
      {text}
    </Btn>
  );
}
