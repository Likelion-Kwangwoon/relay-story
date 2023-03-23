import iconRightArrow from "../../assets/icon-RightArrow.svg"
import iconLeftArrow from "../../assets/icon-LeftArrow.svg"
import styled from "styled-components"

export const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Cover = styled.div`
  width: 214px;
  height: 287px;
  background-color: ${props => props.color};
`
const coverList = ['pink', 'blue', 'green', 'yellow']

export default function SelectCover({ cover, setCover }) {
  
  const handleChange = (idx) => {
    cover + idx >= coverList.length ? 
      setCover(0) : cover + idx < 0 ? setCover(coverList.length - 1) : setCover(cover + idx)
  }
  
  return (
    <Wrap>
      <button onClick={() => handleChange(-1)}>
        <img src={iconLeftArrow} alt="이전 책 표지 보기" />
      </button>
      {/* 임시 책 커버 */}
      <Cover color={coverList[cover]}></Cover> 
      <button onClick={() => handleChange(1)}>
        <img src={iconRightArrow} alt="다음 책 표지 보기" />  
      </button>
    </Wrap>
  )
}
