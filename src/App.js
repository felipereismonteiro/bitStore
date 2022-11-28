import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import GlobalStyle from "./components/GlobalStyle";
import HomePage from "./pages/HomePage";
import Context from "./context/context";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(undefined);

  return (
    <>
      <Context.Provider value={[token, setToken]}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:idProduct" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
