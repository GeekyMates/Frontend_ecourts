import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import EcourtsDashboard from './EcourtsDashboard/EcourtsDashboard';
import EcourtsDocumentUpload from './EcourtsDocumentUpload/EcourtsDocumentUpload';
import EcourtsDocumentStatus from './EcourtsDocumentStatus/EcourtsDocumentStatus.js';
import EcourtsCourtReminder from './EcourtsCourtReminder/EcourtsCourtReminder';
import EcourtsCalendar from './EcourtsCalendar/EcourtsCalendar';
import EcourtsFeedback from './EcourtsFeedback/EcourtsFeedback';
import EcourtsFAQ from './EcourtsFAQ/EcourtsFAQ';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
import { useState } from 'react';
import LoginModal from './LoginModal';
import "./Home.css";
import AdminLoginPage from '../LoginPages/AdminLoginPage';
import RegistrarLoginPage from '../LoginPages/RegistrarLoginPage';
import ChiefRegistrarLogin from '../LoginPages/ChiefRegistrarLoginPage';
import ClientLoginPage from '../LoginPages/ClientLoginPage';

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Court Room</h1>
          <button onClick={handleLoginClick}>Login</button>
        </header>
        {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/upload">Document Upload</Link>
            </li>
            <li>
              <Link to="/status">Document Status</Link>
            </li>
            <li>
              <Link to="/reminder">Court Reminder</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Routes>
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/registrar" element={<RegistrarLoginPage />} />
          <Route path="/chief" element={<ChiefRegistrarLogin />} />
          <Route path="/client" element={<ClientLoginPage />} />
          <Route
            path="/"
            exact
            element={<EcourtsDashboard />}
            fallback={<p>Please log in to access the dashboard.</p>}
          />
          <Route path="/upload" element={<EcourtsDocumentUpload />} />
          <Route path="/status" element={<EcourtsDocumentStatus />} />
          <Route path="/reminder" element={<EcourtsCourtReminder />} />
          <Route path="/calendar" element={<EcourtsCalendar />} />
          <Route path="/feedback" element={<EcourtsFeedback />} />
          <Route path="/faq" element={<EcourtsFAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
