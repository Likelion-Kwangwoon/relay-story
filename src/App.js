import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    margin: 0 auto;
    text-align: center;
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
