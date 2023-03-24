import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import imgBarcode from "../../assets/img-barcode.png"
import { useNavigate } from 'react-router-dom'

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
  background-color: aliceblue;
  margin: 0 auto 48px;
  position: relative;
  & > p {
    position: absolute;
    margin: 50px auto;
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
  const navigate = useNavigate()

  return (
    <>
      <h2 className='hidden'>공유 페이지</h2>
      <Title>이야기를 공유해보세요</Title>
      <TitleDesc>
        {
          isPrev ?
            '표지를 누르면 내용을 볼 수 있어요 😁'
            : '바코드를 클릭하면 링크를 복사할 수 있어요!'
        }
      </TitleDesc>
      <Cover onClick={() => navigate(isPrev ? '/share/content' : '/comment')}>
        {
          isPrev ?
          <p>책 제목</p>
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
