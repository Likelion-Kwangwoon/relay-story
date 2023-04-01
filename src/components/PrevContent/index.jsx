import ImgMemo from "../../assets/img-memo.png"
import styled from "styled-components";

export const TextWrap = styled.div`
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  & > img {
    width: 100%;
  }
  & > p {
    position: absolute;
    top: 0;
    margin-top: 25px;
    text-align: left;
    font-size: 18px;
    line-height: 160%;
    color: ${props => props.theme.text.brown};
    padding: 80px 40px 0;

    @media screen and (max-width: 500px) {
      padding: 55px 25px 0;
      font-size: 14px;
    }
  }
`

export const TextSpan = styled.span`
  color: ${props => props.theme.text.black};
  padding: 70px 40px 0;

  &:first-of-type{
    position: absolute;
    font-size: 20px;
    left: 0;
  }
  &:last-of-type{
    position: absolute;
    right: 0;
    color: ${props => props.theme.text.gray2};
  }

  @media screen and (max-width: 500px) {
    padding: 55px 25px 0;
    &:first-of-type{
      font-size: 18px;
    }
    &:last-of-type{
      font-size: 14px;
    }
  }
`

export default function PrevContent({ content }) {
  return (
    content &&
    <TextWrap>
      <img src={ImgMemo} alt="" />  
      <TextSpan>{content.slice(-1)[0].nickname}</TextSpan>
      <TextSpan>{content.length}번째 작가</TextSpan>
      <p>{content.slice(-1)[0].content} </p>
    </TextWrap>
  )
}
