import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item dropdown">Solutions</li>
        <li className="nav-item dropdown">Resources</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">News</li>
        <li className="nav-item">Teams</li>
      </ul>
    </nav>
  );
}

function LeftContent() {
  return (
    <div className="left-content">
      <h1>Phishing Email Detector using AI</h1>
      <p>Using AI to detect whether the email or any provided information is scam or not</p>
    </div>
  );
}

function RightContent() {
  const [fileContent, setFileContent] = useState("");
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileType(file.type);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith("text")) {
          setFileContent(e.target.result);
        } else if (file.type.startsWith("image")) {
          setFileContent(e.target.result);
        }
      };
      if (file.type.startsWith("text")) {
        reader.readAsText(file);
      } else if (file.type.startsWith("image")) {
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="right-content">
      <h2>Want to know if this message is a scam or not?</h2>
      <p>Please drop the message in the chat.</p>
      {fileType.startsWith("text") ? (
        <textarea 
          placeholder="Please paste your message here"
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
        />
      ) : fileType.startsWith("image") ? (
        <img src={fileContent} alt="Uploaded file" style={{ maxWidth: "100%" }} />
      ) : (
        <p>Unsupported file type</p>
      )}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="upload-btn">
        Choose file
      </label>
    </div>
  );
}

export default App;
