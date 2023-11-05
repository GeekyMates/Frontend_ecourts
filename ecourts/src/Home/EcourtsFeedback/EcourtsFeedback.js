import React, { useState } from 'react';

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the feedback to the server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter your feedback here..."
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackComponent;
