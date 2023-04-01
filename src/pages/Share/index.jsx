import { useState } from 'react'
import styled from 'styled-components'
import imgBarcode from "../../assets/img-barcode.png"
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getBookDetail } from '../../api/api'
import coverList from "../../components/BookCoverList"
import { decrypt, encrypt } from '../../util/encrypt'
import CopyToClipboard from 'react-copy-to-clipboard'

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
  transform: scaleX(${props => props.transform});
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
    transform: scaleX(${props => props.transform});
    left: ${props => props.transform ? '10px' : false};
    right: ${props => props.transform ? false : '10px' };
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  
  }
`

export const CopyBtn = styled.button`
  background-color: ${(props) => props.theme.color.main};
  padding: 14px 0;
  font-size: 1.2rem;
  color: ${props => props.theme.text.black};
  min-width: 68px;
  padding: 15px 0;
  border-radius: 50px;
  font-size: 16px;
`

export default function Share() {
  const [isPrev, setIsPrev] = useState(true)
  const [isFinish, setIsFinish] = useState(false)
  const [url, setUrl] = useState('')
  const [bookDetail, setBookDetail] = useState({
    book: {},
    comments: []
  })
  const navigate = useNavigate()
  const location = useLocation()
  const titleNum = new URL(window.location.href).searchParams.get("title");

  const handleGetBookDetail = async (id) => {
    const response = await getBookDetail(id)

    setBookDetail(prev => {
      return {
        ...prev,
        book: response.book,
        comments: response.comments ?? 1
      } 
    })
    
    if (response.comments?.length === 10) {
      setIsFinish(true)
    } 
  }

  const handleIsFinish = () => {
    if (isPrev) {
      bookDetail.comments.length < 10 ?
        alert('책이 완성될 때까지 조금만 기다려주세요 🥹') :
        navigate('/share/content', { state: { bookDetail } })
    }    
  }
  
  useEffect(() => {
    if (titleNum) {
      const id = decrypt(titleNum.replaceAll(" ", "+"))
      handleGetBookDetail(id)
      setUrl(titleNum)
    } else if(location.state?.id) {
      location.state.id && handleGetBookDetail(location.state.id)
      location.state.id && setUrl(encrypt(location.state.id))
    } else if (location.state?.book) {
      setIsPrev(false)
      setBookDetail(location.state.book)
      setUrl(encrypt(location.state.book.comments[0].book))
    }
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
        transform={isPrev ? 1 : -1}
        onClick={handleIsFinish}>
        {
          isPrev ?
            <p>{bookDetail.book?.title}</p>
            :
             <CopyToClipboard className="Toram"
                text={`http://localhost:3000/comment?title=${url}`}
                onCopy={() => alert("클립보드에 복사되었습니다.")}>
                  <img src={imgBarcode} alt="바코드" />
              </CopyToClipboard>
        }
      </Cover>
      <ShareWrap>
        <CopyToClipboard className="Toram"
          // 기본 url 배포 후 변경
          text={`http://localhost:3000/comment?title=${url}`}
          onCopy={() => alert("클립보드에 복사되었습니다.")}>
          <p>http://localhost:3000/comment?title={url}</p>
        </CopyToClipboard>
         <CopyToClipboard className="Toram"
          text={`http://localhost:3000/comment?title=${url}`}
          onCopy={() => alert("클립보드에 복사되었습니다.")}>
          <CopyBtn>복사</CopyBtn>
        </CopyToClipboard>
      </ShareWrap>
    </>
  )
}
