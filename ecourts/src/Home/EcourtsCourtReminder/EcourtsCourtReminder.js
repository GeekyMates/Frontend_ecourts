import React, { useState } from 'react';

const CourtReminderPage = () => {
  const [reminders, setReminders] = useState([]);

  // Fetch the court reminders from the server here

  return (
    <div>
      <h1>Court Reminders</h1>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            {reminder.caseName}
            <span className="date-time">{reminder.dateTime}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourtReminderPage;
