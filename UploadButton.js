import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Image is being uploaded!');
    // Simulate image upload logic here
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;
