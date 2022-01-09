import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mail from "./components/mail/Mail";
import SendMail from "./components/send-mail/SendMail";
import EmailList from "./components/email-list/EmailList";
import React, { Component } from "react";
import { selectSendMessageIsOpen } from "./reducers/mailSlice";
import { useSelector } from "react-redux";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </BrowserRouter>
  );
}

export default App;
