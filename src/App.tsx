import { GlobalStyle } from "./global-style";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import Spinner from "@atom/Spinner";
import "@asset/font/font.css";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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
