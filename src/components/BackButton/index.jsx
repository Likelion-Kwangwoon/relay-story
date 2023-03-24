import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import iconBackArrow from "../../assets/icon-backArrow.svg"

export const BackBtn = styled.button`
  background: ${props => props.theme.color.white};
  position: absolute;
  left: 30px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 35px;
  height: 35px;
  & > img{
    width: 9px;
    vertical-align: middle;
  }
`;

export default function BackButton() {
  const navigate = useNavigate()
  return (
    <BackBtn onClick={() => navigate(-1)}>
      <img src={iconBackArrow} alt="뒤로가기 버튼" />
    </BackBtn>
  );
}