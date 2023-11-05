import React from 'react';

const Accordion = ({ title, content }) => {
 const [isOpen, setIsOpen] = React.useState(false);

 return (
    <div className="accordion">
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <p>{content}</p>}
    </div>
 );
};

export default Accordion;