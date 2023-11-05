import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EcourtsDashboard from './EcourtsDashboard/EcourtsDashboard';
import EcourtsDocumentUpload from './EcourtsDocumentUpload/EcourtsDocumentUpload';
import EcourtsDocumentStatus from './EcourtsDocumentStatus/EcourtsDocumentStatus.js';
import EcourtsCourtReminder from './EcourtsCourtReminder/EcourtsCourtReminder';
import EcourtsCalendar from './EcourtsCalendar/EcourtsCalendar';
import EcourtsFeedback from './EcourtsFeedback/EcourtsFeedback';
import EcourtsFAQ from './EcourtsFAQ/EcourtsFAQ';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
import "./Home.css";
// const myEventsList = [
//     {
//       id: 0,
//       title: 'All Day Event very long title',
//       allDay: true,
//       start: new Date(2015, 3, 0),
//       end: new Date(2015, 3, 1),
//     },
//     {
//       id: 1,
//       title: 'Long Event',
//       start: new Date(2015, 3, 7),
//       end: new Date(2015, 3, 10),
//     }
// ];
function Home() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to eCourts App</h1>
        </header>

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
        <Routes>
        <Route path="/" exact component={EcourtsDashboard} />
        <Route path="/upload" component={EcourtsDocumentUpload} />
        <Route path="/status" component={EcourtsDocumentStatus} />
        <Route path="/reminder" component={EcourtsCourtReminder} />
        <Route path="/calendar" component={EcourtsCalendar} />
        <Route path="/feedback" component={EcourtsFeedback} />
        <Route path="/faq" component={EcourtsFAQ} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;