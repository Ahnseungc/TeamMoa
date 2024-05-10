import { GlobalStyle } from "./global-style";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
