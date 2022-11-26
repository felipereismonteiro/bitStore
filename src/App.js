import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />}/>
          <Route path="/sign-up" element={<SignUpPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;