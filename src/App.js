import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    margin: 0 auto;
    text-align: center;
    max-width: 599px;
    min-height : calc(var(--vh, 1vh) * 100);
  }
`;

function App() {
  
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setScreenSize();
  window.addEventListener('resize', setScreenSize);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
