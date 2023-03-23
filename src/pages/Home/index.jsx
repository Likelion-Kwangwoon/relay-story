import { useState } from "react"
import styled from "styled-components"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import iconGoogle from "../../assets/icon-google.svg"
import iconKakao from "../../assets/icon-kakao.svg"
import MainBg from "../../assets/img-bg.png"
import StarAnimation from "../../components/StarAnimation"

export const Section = styled.section`
  position: fixed;
  width: 100vh;
  height: 100vh;
  background: url(${MainBg}) no-repeat 50% 50% / cover;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 350px;
  & :first-child{
    margin-bottom: 25px;
  }
`

export const SubTitle = styled.p`
  font-size: 1rem;
  margin: 15px 0 140px;
`

export const LoginBtn = styled.button`
  position: relative;
  padding: 13px 0;
  width: 250px;
  border-radius: 5px;
  background-color: #FEE500;
  color: ${props => props.theme.text.black};

  & > img {
    width: 18px;
    position: absolute;
    left: 14px;
  }

  &:first-of-type {
    background-color: #ffffff;
  }
`

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Section>
      <StarAnimation />
        <Logo className="main" />
        <SubTitle>함께 만드는 이야기</SubTitle>
      <BtnWrap>
      {
        isLogin ?
          <>
            <Button text='📜 책 쓰기' className="main" />
            <Button text='📕 내 서재' className="main" />
          </>  
          :
          <>
            <LoginBtn>
              <img src={iconGoogle} alt="" />
              <span>구글 아이디로 로그인</span>
            </LoginBtn>
            <LoginBtn>
              <img src={iconKakao} alt="" />
              <span>카카오 아이디로 로그인</span>
            </LoginBtn>
          </>
      }
      </BtnWrap>
    </Section>
  )
}

