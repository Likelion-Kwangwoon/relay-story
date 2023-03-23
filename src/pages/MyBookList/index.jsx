import { useState } from "react"
import styled from "styled-components"
import Button from "../../components/Button"
import CompGauge from '../../components/CompGauge'

export const BookWrap = styled.div`
  width:250px;
  position: relative;
  margin: 30px auto;
  @media screen and (max-width: 500px) {
    width:210px;
  }
`

export const BookCover = styled.div`
  width:100%;
  height: 310px;
  background-color: #666;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    height: 270px;
  }
`

export const Title = styled.h2`
  box-sizing : border-box;
  width: 100%;
  min-height: 23px;
  height: auto;
  overflow: hidden;
  font-size: 20px;
  padding: 50px 30px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`

export const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextWrap = styled.div`
  width: 63px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p:first-of-type{
    font-size: 15px;
  }
  & > p:last-of-type{
    font-size: 14px;
    color: ${props => props.theme.text.gray2};
  }
`

export default function MyBookList() {
  // const [완성도, 완성도변경] = useState([6, 3, 10])

  return (
    <>
      <BookWrap>
        <BookCover><Title>책 제목입니다</Title></BookCover>
        <Desc>
          <CompGauge count={6}></CompGauge>
          <TextWrap><p>완성도</p> <p>60%</p></TextWrap>
        </Desc>
      </BookWrap>
      <BookWrap>
        <BookCover><Title>책 제목입니다책 제목입니다책 제목입니다책 제목입니다</Title></BookCover>
        <Desc>
          <CompGauge count={3}></CompGauge>
          <TextWrap><p>완성도</p> <p>30%</p></TextWrap>
        </Desc>
      </BookWrap>
      <BookWrap>
        <BookCover><Title>책 제목입니다책 제목입니다책 제목입니다</Title></BookCover>
        <Desc>
          <CompGauge count={7}></CompGauge>
          <TextWrap><p>완성도</p> <p>70%</p></TextWrap>
        </Desc>
      </BookWrap>
      <Button text="책 만들기" className="main fix" />
    </>

  )
}