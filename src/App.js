import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import GlobalStyle from './components/GlobalStyle';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/sign-in" element={<SignInPage />}/>
          <Route path="/sign-up" element={<SignUpPage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;