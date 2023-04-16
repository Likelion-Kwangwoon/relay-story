import { useState } from "react"
import styled from "styled-components"
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import iconGoogle from "../../assets/icon-google.svg"
import iconKakao from "../../assets/icon-kakao.svg"
import MainBg from "../../assets/img-bg.png"
import StarAnimation from "../../components/StarAnimation"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

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

  /* &:last-of-type {
    background-color: #ffffff;
  } */
  /* 구글 로그인 구현 후 수정 */
`

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

export default function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('accessToken') && setIsLogin(true)
  }, [])

  const handleLogin = () => {
     window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <Section>
      <StarAnimation />
        <Logo className="main"/>
        <SubTitle>함께 만드는 이야기</SubTitle>
      <BtnWrap>
      {
        isLogin ?
          <>
              <Button text='📜 책 쓰기' className="main"
                onClick={() => navigate('/writeBook')}
              />
            <Button text='📕 내 서재' className="main" onClick={() => navigate('/booklist')} />
          </>  
          :
          <>
            {/* <LoginBtn>
              <img src={iconGoogle} alt="" />
              <span>구글 아이디로 로그인</span>
            </LoginBtn> */}
            <LoginBtn onClick={handleLogin}>
              <img src={iconKakao} alt="" />
              <span>카카오 아이디로 로그인</span>
            </LoginBtn>
          </>
      }
      </BtnWrap>
    </Section>
  )
}

