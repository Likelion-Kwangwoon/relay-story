import iconRightArrow from "../../assets/icon-RightArrow.svg"
import iconLeftArrow from "../../assets/icon-LeftArrow.svg"
import styled from "styled-components"
import coverList from "../BookCoverList"

export const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Cover = styled.img`
  width: 214px;
  height: 287px;
`

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
      <Cover src={coverList[cover]} alt={`${cover}번 표지`} />
      <button onClick={() => handleChange(1)}>
        <img src={iconRightArrow} alt="다음 책 표지 보기" />  
      </button>
    </Wrap>
  )
}
