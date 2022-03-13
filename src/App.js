import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from "./Pages/login/Login"
import SignUp from "./Pages/signup/Signup"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Form from "./components/forms/Form";
import Admin from "./Pages/admin/Admin";
import AboutUs from "./Pages/about/AboutUs";
import Footer from "./components/footer/Footer";
import UserHome from "./Pages/user home/UserHome";
import TemplateOne from "./Pages/resume templates/template one/TemplateOne";
import TemplateTwo from "./Pages/resume templates/template two/TemplateTwo";
import TemplateThree from "./Pages/resume templates/template three/TemplateThree";
import ChooseTemplate from "./Pages/choose template/ChooseTemplate";
import Pdf from "./Pages/react to pdf/Pdf";
import { useState } from 'react';
import Error from "./components/error/Error";

function App() {

  const [templateNum, setTemplateNum] = useState(0);


  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/api/auth/login" element={<LogIn />} />
          <Route exact path="/api/auth/register" element={<SignUp />} />
          <Route exact path="/api/auth/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/api/auth/resetpassword/:resetToken" element={<ResetPassword />} />
          <Route exact path="/form/:templateNum" element={<Form templateNum={templateNum} />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/user-home" element={<UserHome />} />
          <Route exact path="/template-one" element={<TemplateOne />} />
          <Route exact path="/template-two" element={<TemplateTwo />} />
          <Route exact path="/template-three" element={<TemplateThree />} />
          <Route exact path="/choose-template" element={<ChooseTemplate templateNum={templateNum} setTemplateNum={setTemplateNum} />} />
          <Route exact path="/resume-download" element={<Pdf />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
