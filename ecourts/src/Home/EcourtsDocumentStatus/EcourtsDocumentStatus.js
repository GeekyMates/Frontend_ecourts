import React from 'react';

const StatusComponent = ({ status }) => {
  const statusToColorMap = {
    Pending: 'yellow',
    InProgress: 'orange',
    Completed: 'green',
    Cancelled: 'red',
  };

  const statusColor = statusToColorMap[status];

  return (
    <div className="status-component">
      <span className={`status-label ${statusColor}`}>{status}</span>
    </div>
  );
};

export default StatusComponent;
