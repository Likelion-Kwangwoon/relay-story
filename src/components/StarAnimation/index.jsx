import styled, { keyframes } from "styled-components"
import imgStar from "../../assets/img-star.png"

export const Wrap = styled.section`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 40vh;
  top: 0;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    transform: translateX(20%);
  }
`

export const animateOverlay = keyframes`
  0% {
    rotate: 0deg;
  }
  50% {
    rotate: 60deg;
  }
  100% {
    rotate: 00deg;
  }
`

export const animateOverlay2 = keyframes`
  0% {
    rotate: 0deg;
  }
  50% {
    rotate: -60deg;
  }
  100% {
    rotate: 0deg;
  }
`

export const Star = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: ${props => props.left};
  top: ${props => props.top};
  rotate: ${props => props.top}deg;

  @media screen and (max-width: 500px) {
    width: 12px;
    height: 12px;
  }

  &:nth-child(2n+1) {
    animation: ${animateOverlay} 4s ease-in-out infinite;
  }
  &:nth-child(2n) {
    animation: ${animateOverlay2} 2s ease-in-out infinite;
  }
`

function MakeStarWeb() {
  const getRandomX = () => Math.random() * window.innerWidth;
  const getRandomY = () => Math.random() * (window.innerHeight - window.innerHeight * 0.7);

  return (
    Array(15).fill().map((_, i) => {
      return (
        <Star key={i} src={imgStar} left={`${getRandomX()}px`} top={`${getRandomY()}px`}  />
      )
    })
  )
}

function MakeStarMobile() {
  const height = [17, 10, 25, 9, 46, 63, 20, 67, 57, 50, 79]
  const width = [10, 20, 32, 52, 14, 39, 42, 7, 22, 35, 50] 

  return (
    Array(height.length).fill().map((_, i) => {
      return (
        <Star key={i} src={imgStar} left={`${width[i]}%`} top={`${height[i]}%`}  />
      )
    })
  )
}

export default function StarAnimation() {
  return (
    <Wrap>
      { window.innerWidth > 500 ? <MakeStarWeb /> : <MakeStarMobile /> }
    </Wrap>
  )
}
