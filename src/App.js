import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    margin: 0 auto;
    text-align: center;
    max-width: 599px;
    min-height : calc(var(--vh, 1vh) * 100);
    font-family: 'GangwonEdu_OTFBoldA';
    background-color: ${(props) => props.theme.color.bg};
  }
  
  button, input, textarea {
    font-family: 'GangwonEdu_OTFBoldA';
  }

  button {
    cursor: pointer;
    border : none;    
    background-color: inherit;
  }

  .hidden{
		position:absolute;
    overflow:hidden;
    width:1px;
    height:1px;
    margin:-1px;
    clip:rect(0,0,0,0);
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
