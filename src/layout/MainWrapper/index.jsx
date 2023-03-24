import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import styled from "styled-components"

export const Section = styled.section`
    margin: 100px 0;
`

export default function MainWrapper() {
    return(
        <>
            <Header />
            <Section>
                <Outlet />
            </Section>
        </>
    )
}