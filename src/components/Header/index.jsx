import styled from 'styled-components'
import BackButton from '../BackButton'
import Logo from '../Logo'

export const HeaderWrap = styled.header`
  padding: 60px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: ${(props) => props.theme.color.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Header() {
  return (
    <HeaderWrap>
      <BackButton />
      <Logo />
    </HeaderWrap>
  )
}
