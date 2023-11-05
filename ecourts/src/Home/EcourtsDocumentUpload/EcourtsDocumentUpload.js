import React, { useState } from 'react';

const DocumentUploadComponent = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Upload the file to the server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileUpload} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default DocumentUploadComponent;
