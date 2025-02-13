import "./index.css";
import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import SignUpPageClient from "./Pages/SignUpPage";
import ClientLogin from "./Components/ClientLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import AccountingFirmSignUp from "./Components/AccountingFirmSignUp";
import ClientSignup from "./Components/ClientSignup";
import AccountingFirmLogIn from "./Components/AccountingFirmLogIn";
import AdminLogin from "./Components/AdminLogin";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import { LanguageProvider } from "./Contexts/LanguageContext";

import SubmitRequestPage from "./Pages/SubmitRequestPage";
import FirmProfilePage from "./Pages/FirmProfilePage";
import UpdateProfile from "./Pages/UpdateProfile";
import AddService from "./Components/AddService";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup-client"
            element={<SignUpPageClient status={"client"} />}
          />
          <Route
            path="/signup-accountingFirm"
            element={<SignUpPageClient status={"accountingFirm"} />}
          />
          <Route path="/Login-client" element={<Login status="client" />} />
          <Route
            path="/Login-accountingFirm"
            element={<Login status="accountingFirm" />}
          />
          <Route path="/Login-Admin" element={<Login status="admin" />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/SubmitRequest" element={<SubmitRequestPage />} />
          <Route path="/FirmProfile" element={<FirmProfilePage />} />
          <Route path="/FirmProfile/update" element={<UpdateProfile />} />
          {/* <Route path="/FirmProfile/AddService" element={<AddService />} /> */}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
