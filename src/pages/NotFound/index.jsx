import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Button from "../../components/Button"

const Wrap = styled.section`
  margin: 300px 0;
  & > p {
    margin-bottom: 30px;
  }
`

export default function NotFound() {
  const navigate = useNavigate()

  const handleNotFound = () => {
    localStorage.getItem('accessToken') && localStorage.removeItem('accessToken') 
    navigate('/')
  }

  return (
    <Wrap>
      <p>다시 로그인 후 시도해주세요 🥹</p>
      <Button onClick={handleNotFound} className='main' text='로그인하기' />
    </Wrap>
  )
}
