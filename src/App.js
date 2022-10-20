import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Resources/GlobalStyle";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Habitos from "./Pages/Habitos";
import Hoje from "./Pages/Hoje";
import Historico from "./Pages/Historico";
import Footer from "./Components/Footer";
import WelcomeScreen from "./Pages/WelcomeScreen";
import React from "react";
import { AuthContext } from "./Providers/auth";

function App() {
  const {userInfo, setUserInfo} = React.useContext(AuthContext)
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
