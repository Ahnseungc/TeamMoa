import { GlobalStyle } from "./global-style";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<div>...loading</div>}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
