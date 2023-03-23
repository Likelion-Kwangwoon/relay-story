import { useState } from "react"
import styled from "styled-components"
import SelectCover from "../../components/SelectCover"
import ImgTextarea from "../../assets/img-textarea.svg"
import Button from "../../components/Button"

export const CoverDesc = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.text.gray2};
`

export const TitleInp = styled.input`
  background-color: inherit;
  margin: 20px auto 30px;
  width: 244px;
  border: none;
  outline: none;
  border-bottom: 0.5px solid #D2D2D2;
  font-size: 14px;
  padding: 10px;
  &::placeholder{
    color: ${props => props.theme.text.gray1};
    text-align: center;
  }
`

export const TextWrap = styled.div`
  position: relative;
  margin: 20px auto;
  width: 80%;
  & > img {
    width: 100%;
  }
`

export const Textarea = styled.textarea`
  background-color: inherit;
  position: absolute;
  width: 90%;
  height: 85%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5%;
  line-height: 160%;
  font-size: 13px;
  border: none;
  outline: none;
  resize: none;
  ::placeholder{
    color: ${props => props.theme.text.gray1};
    text-align: center;
  }
`

export default function WriteBook() {
  const [cover, setCover] = useState(0)

  return (
    <>
      <h2 className="hidden">책 쓰기 페이지</h2>
      <CoverDesc>표지를 선택하세요 {`:)`}</CoverDesc>
      <SelectCover cover={cover} setCover={setCover} />
      <TitleInp maxLength="30" type="text" name="" id="" placeholder="책 제목을 입력하세요" />
      <p>프롤로그</p>
      <TextWrap>
        <img src={ImgTextarea} alt="" />
        <Textarea placeholder="당신을 작가로 만들어 줄 첫 줄을 써 보세요! 🥰" name="" id="" cols="30" rows="5" maxLength="200" />
      </TextWrap>
      <Button text="만들기" className="main fix" />
    </>
  )
}
