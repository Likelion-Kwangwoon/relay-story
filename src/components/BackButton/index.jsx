import styled from "styled-components"
import iconBackArrow from "../../assets/icon-backArrow.svg"

export const BackBtn = styled.button`
  background: ${props => props.theme.color.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 37px;
  height: 37px;
  & > img{
    width: 9px;
    vertical-align: middle;
  }
`;

export default function index({ onClick }) {
  return (
    <BackBtn onClick={onClick}>
      <img src={iconBackArrow} alt="뒤로가기 버튼" />
    </BackBtn>
  );
}