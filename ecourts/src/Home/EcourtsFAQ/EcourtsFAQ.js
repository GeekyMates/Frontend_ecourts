import React from 'react';
import Accordion from './Accordian';
const Faq = () => {
 return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion
        title="What is eCourt?"
        content="eCourt is an online platform for booking court dates and accessing court services."
      />
      <Accordion
        title="How do I register for an account?"
        content="Visit the eCourt website, and click on 'Sign Up' in the navigation bar. Fill in the required information and click 'Register'."
      />
      {/* FAQ items will be added here */}
    </div>
 );
};

export default Faq;