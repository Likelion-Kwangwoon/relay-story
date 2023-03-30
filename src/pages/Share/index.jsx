import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import imgBarcode from "../../assets/img-barcode.png"
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getBookDetail } from '../../api/api'
import coverList from "../../components/BookCoverList"

export const Title = styled.p`
  font-size: 26px;
`

export const TitleDesc = styled.p`
  font-size: 14px;
  margin: 30px 0;
`

export const Cover = styled.div`
  width: 283px;
  height: 374px;
  
  background: url(${props => props.background}) no-repeat 50% 50% / contain;
  margin: 0 auto 48px;
  position: relative;
  & > p {
    position: absolute;
    margin: 70px auto;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
  }
  & > img {
    position: absolute;
    width: 96px;
    bottom: 15px;
    right: 10px;
  }
`

export const ShareWrap = styled.div`
  background-color: ${props => props.theme.color.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.17);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2px 4px;
  box-sizing: border-box;
  width: 300px;
  & > p {
    margin-left: 20px;
    color: ${props => props.theme.text.gray2};
  }
`

export default function Share() {
  const [isPrev, setIsPrev] = useState(true)
  const [isFinish, setIsFinish] = useState(false)
  const [bookDetail, setBookDetail] = useState({
    book: {},
    comments: []
  })
  const navigate = useNavigate()
  const location = useLocation()

  const handleGetBookDetail = async (id) => {
    const response = await getBookDetail(id)
    
     setBookDetail(prev => {
      return {
        ...prev,
        book: response.book,
        comments: response.comments ?? 1
      }
    })
  }

  const handleIsFinish = () => {
    bookDetail.comments.length < 10 ?
      alert('책이 완성될 때까지 조금만 기다려주세요 🥹') :
      navigate('/share/content')
  }
  
  useEffect(() => {
    location.state.id && handleGetBookDetail(location.state.id)
  }, [])
  

  return (
    bookDetail.book && 
      <>
      <h2 className='hidden'>공유 페이지</h2>
      <Title>이야기를 공유해보세요</Title>
      <TitleDesc>
        {
          isPrev ?
            isFinish ?
              '표지를 누르면 내용을 볼 수 있어요 😁'
              : `책이 완성될 때까지 ${10 - bookDetail.comments?.length}명 남았어요! 😚`
            : '바코드를 클릭하면 링크를 복사할 수 있어요!'
        }
      </TitleDesc>
      <Cover
        background={coverList[bookDetail.book.cover]}
        onClick={handleIsFinish}>
        {
          isPrev ?
            <p>{bookDetail.book?.title}</p>
            : <img src={imgBarcode} alt="바코드" />
        }
      </Cover>
      <ShareWrap>
        <p>http://localhost:3000/</p>
        <Button text='복사' className='copy' />
      </ShareWrap>
    </>
  )
}
