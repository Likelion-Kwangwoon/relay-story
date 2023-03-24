import { useState } from "react"
import styled from "styled-components"

export const GaugeWrap = styled.div`
  width: 126px;
  height: 24px;
  border: 1px solid ${props => props.theme.text.gray3};
  background-color:${props => props.theme.color.white};
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 0 3px;
    width: 100px;
    height: 20px;
  }
`
export const ActiveBox = styled.div`
  width: 8px;
  height: 18px;
  background-color: ${props => props.active ? props.theme.color.sub : props.theme.text.gray3};
  @media screen and (max-width: 500px) {
    width: 6px;
    height: 15px;
  }
`

export default function CompGauge({ count = 3 }) {
  const gauge = new Array(count).fill(true).concat(new Array(10 - count).fill(false));
  return (
    <GaugeWrap>
      {
        gauge.map((v, i) => (<ActiveBox active={v}></ActiveBox>))
      }
    </GaugeWrap>
  )
}