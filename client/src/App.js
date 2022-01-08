import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mail from "./components/mail/Mail";
import EmailList from "./components/email-list/EmailList";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />

            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
