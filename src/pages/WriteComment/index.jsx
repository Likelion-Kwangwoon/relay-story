import styled from "styled-components";
import Button from "../../components/Button";
import { useState } from "react";
import PrevContent from "../../components/PrevContent";
import { decrypt } from "../../util/encrypt";
import { useEffect } from "react";
import { getBookDetail, postComment } from "../../api/api";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Title = styled.h2`
  font-size: 1.625rem;
`

export const SubTitle = styled.p`
  font-size: 1rem;
  margin: 15px 0 30px;
`

export const NameInp = styled.input`
  display: block;
  outline: none;
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
  font-size: 15px;
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
  const [bookId, setBookId] = useState('')
  const [comment, setComment] = useState('')
  const [book, setBook] = useState('')
  const [bookTitle, setBookTitle] = useState('')
  const nameRef = useRef('') 
  const navigate = useNavigate()
  const titleNum = new URL(window.location.href).searchParams.get("title");

  const handleBookDetail = async (id) => {
    const response = await getBookDetail(id)
    if (response.comments.length === 10) {
      navigate(`/share/cover?title=${titleNum}`)
    }
    setBookTitle(response.book.title)
    setBook(response.comments)
  }

  const handlePostComment = async () => {
    if (nameRef.current.value?.length < 2) {
      alert('닉네임은 2글자 이상이어야 합니다!')
    } else if (comment.length < 10) {
      alert('내용은 10글자 이상 작성해주세요!')
    } else {
      const data = {
        "bookId": bookId ,
        "nickname": nameRef.current.value,
        "content": comment
      }
      const response = await postComment(JSON.stringify(data))

      if (typeof response === "number") {
        alert('작성이 완료되었습니다!')
        navigate('/')
      } else alert('다시 시도해주세요 🥹')
    }
  }

  useEffect(() => {
    const id = decrypt(titleNum) 
    setBookId(id)
    handleBookDetail(id)
  }, [])

  return (
    <>
      <Title>{bookTitle}</Title>
      <SubTitle>이전 사용자가 적은 내용에 이어서 글을 작성해보세요!</SubTitle>
      <PrevContent content={book} />
      <NameInp ref={nameRef} type="text" placeholder="닉네임을 입력하세요" />
      <InpWrap>
        <TextInp name="comment" id="comment" cols="30" rows="8"
          onChange={(e) => setComment(e.target.value)} maxLength="200"
          placeholder="이전 사용자의 내용을 읽고 이야기를 이어서 작성해주세요!">
        </TextInp>
        <span>{`${comment.length}/200자`}</span>
      </InpWrap>
      <Button onClick={handlePostComment} text="글쓰기" className="main fix" />
    </>
  )
}
