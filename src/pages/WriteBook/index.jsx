import { useState } from "react"
import styled from "styled-components"
import SelectCover from "../../components/SelectCover"

export const CoverDesc = styled.p`
  margin-bottom: 20px;
`

export default function WriteBook() {
  const [cover, setCover] = useState(0)
  return (
    <section>
      <CoverDesc>표지를 선택하세요 {`:)`}</CoverDesc>
      <SelectCover cover={cover} setCover={setCover} />
    </section>
  )
}
