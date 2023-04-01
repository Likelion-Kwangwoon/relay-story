import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, {keyframes} from "styled-components";

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  } 50% {
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
  animation: ${FadeIn} 1s linear;
  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 20px auto;
  }
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
  padding: 40px 20px 0;
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

export default function RelayComment({ comments }) {
  const numRef = useRef(0)
  const [commentArray, setCommentArray] = useState([])
  const divRef = useRef()

  useEffect(() => {
    const loop = setInterval(() => {
      let newArray = comments[numRef.current]
      setCommentArray(prev => [...prev, newArray])
      numRef.current++;
      window.scrollTo({ top: (document.body.scrollHeight), behavior: "smooth" })
      if (numRef.current === 10) clearInterval(loop)
    }, 2000);
  }, [])
  
  
  return (
    commentArray.map((comment, index) =>
      <CommentBox key={index} ref={divRef}>
        <TextWrap>
          <TextSpan>
            <p>{comment.nickname}</p>
            <p>{index + 1}번째 작가</p>
          </TextSpan>
          <p>{comment.content}</p>
        </TextWrap>
      </CommentBox>
    )
  )
}