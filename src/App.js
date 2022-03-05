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


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/api/auth/login" element={<LogIn />} />
          <Route exact path="/api/auth/register" element={<SignUp />} />
          <Route exact path="/api/auth/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/api/auth/resetpassword/:resetToken" element={<ResetPassword />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
