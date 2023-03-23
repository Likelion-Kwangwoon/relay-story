import styled from "styled-components";
import Button from "../../components/Button";
import { useState } from "react";
import PrevContent from "../../components/PrevContent";

export const Title = styled.h2`
  font-size: 1.625rem;
`

export const SubTitle = styled.p`
  font-size: 1rem;
  margin: 15px 0 30px;
`

export const NameInp = styled.input`
  display: block;
  border: none;
  background-color: inherit;
  border-bottom: 0.5px solid #CCCCCC;
  margin: 20px auto;
  font-size: 1rem;
  padding: 10px;
  box-sizing: border-box;
  width: 80%;
  &::placeholder {
    color: ${props => props.theme.text.gray2};
  }
`

export const InpWrap = styled.div`
  position: relative;
  & > span {
    position: absolute;
    right: 12%;
    bottom: 8%;
    font-size: 14px;
    color: ${props => props.theme.text.gray2};
  }
`

export const TextInp = styled.textarea`
  resize: none;
  position: relative;
  width: 80%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #DADADA;
  border-radius: 5px;
  outline: none;
  line-height: 160%;
  &::placeholder{
    color: ${props => props.theme.text.gray1};
  }
  & > span {
    z-index: 20;
    position: absolute;
  }
`


export default function WriteComment() {
  const [comment, setComment] = useState('')

  return (
    <div>
      <Title>책 제목 책 제목</Title>
      <SubTitle>이전 사용자가 적은 내용에 이어서 글을 작성해보세요!</SubTitle>
      <PrevContent />
      <NameInp type="text" placeholder="닉네임을 입력하세요" />
      <InpWrap>
        <TextInp name="comment" id="comment" cols="30" rows="8"
          onChange={(e) => setComment(e.target.value)} maxLength="200"
          placeholder="이전 사용자의 내용을 읽고 이야기를 이어서 작성해주세요!">
        </TextInp>
        <span>{`${comment.length}/200byte`}</span>
      </InpWrap>
      <Button text="글쓰기" className="main fix" />
    </div>
  )
}
