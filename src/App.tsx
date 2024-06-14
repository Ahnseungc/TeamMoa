import { GlobalStyle } from "./global-style";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "@asset/font/font.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>...loading</div>}>
        <RecoilRoot>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </RecoilRoot>
      </Suspense>
    </>
  );
}

export default App;
