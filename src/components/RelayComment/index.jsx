import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const CommentBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(157, 157, 157, 0.15);
  @media screen and (max-width: 500px) {
      width: 90%;
      margin: 20px auto;
    }

    
  /* 애니메이션 */
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: visibility 1000ms , opacity 1000ms ;
`

export const TextWrap = styled.div`

  width: 90%;
  margin: 0 auto;
  & > p:last-of-type {
    text-align: left;
    font-size: 18px;
    line-height: 150%;
    color: ${props => props.theme.text.brown};
    padding: 25px 20px;

    @media screen and (max-width: 500px) {
      padding: 20px 15px;
      font-size: 14px;
    }
  }
`

export const TextSpan = styled.span`
  color: ${props => props.theme.text.black};
  padding: 50px 20px 0;
  display: flex;
  justify-content: space-between;

  &>p:first-of-type{
    font-size: 16px;
  }
  &>p:last-of-type{
    color: ${props => props.theme.text.gray2};
  }

  @media screen and (max-width: 500px) {
    padding: 30px 15px 0;
    &:first-of-type{
      font-size: 12px;
    }
    &:last-of-type{
      font-size: 12px;
    }
  }
`

export default function RelayComment({ nickname, cnt, content, visible }) {
  return (
    <CommentBox visible={visible}>
      <TextWrap>
        <TextSpan>
          <p>{nickname}</p>
          <p>{cnt}번째 작가</p>
        </TextSpan>
        <p>{content}</p>
      </TextWrap>
    </CommentBox>
  )
}