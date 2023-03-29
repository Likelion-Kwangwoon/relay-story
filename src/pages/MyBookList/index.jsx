import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getBookList } from "../../api/api"
import CompGauge from '../../components/CompGauge'

export const BookWrap = styled.div`
  width:250px;
  position: relative;
  margin: 40px auto;
  @media screen and (max-width: 500px) {
    width:210px;
  }
`

export const BookCover = styled.div`
  width:100%;
  height: 310px;
  background: url(${props => props.backgroundImg}) no-repeat 50% 50% / contain;
  margin-bottom: 20px;
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
  padding: 60px 30px;
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
  const navigate = useNavigate();
  const [bookList, setBookList] = useState([])
  
  const handleGetBookList = async () => {
    const response = await getBookList()
    setBookList(response)
  }

  useEffect(() => {
    handleGetBookList()
  }, [])

  return (
    <>
      {
        bookList && bookList.map((item, index) => 
          <BookWrap key={index}>
            <BookCover
              backgroundImg={require(`../../assets/cover/cover_${item.book.cover + 1}.png`)}
              onClick={() => navigate('/share/cover', {state: item})}>
              <Title>{item.book.title}</Title>
            </BookCover>
            <Desc>
              <CompGauge count={item.comments?.length}></CompGauge>
              <TextWrap><p>완성도</p> <p>{item.comments?.length}0%</p></TextWrap>
            </Desc>
          </BookWrap>
        )
      }
    </>

  )
}