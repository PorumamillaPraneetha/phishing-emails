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
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item dropdown">Detect Phishing</li>
        <li className="nav-item dropdown">Report Phishing</li>
        <li className="nav-item dropdown" onClick={toggleDescription}>Educate Users</li>
        <li className="nav-item">FAQ</li>
        <li className="nav-item">Contact Us</li>
      </ul>
      {showDescription && (
        <div className="description-box">
          <p>
            Phishing attacks can be prevented by educating users about how to identify suspicious emails and messages.
            Some common tips include:
          </p>
          <ul>
            <li>Be cautious of emails requesting personal or financial information.</li>
            <li>Check the sender's email address for authenticity.</li>
            <li>Avoid clicking on suspicious links or downloading attachments from unknown sources.</li>
            <li>Verify the legitimacy of the email by contacting the sender through other means.</li>
            <li>Keep software and antivirus programs up to date to protect against malware.</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function LeftContent() {
  const [activeTip, setActiveTip] = useState(null);

  const toggleTip = (index) => {
    setActiveTip(activeTip === index ? null : index);
  };

  const tips = [
    {
      title: "Check the Sender's Email Address",
      content: "Always check the sender's email address to make sure it matches the organization it claims to be from."
    },
    {
      title: "Look for Spelling Mistakes",
      content: "Phishing emails often contain spelling mistakes or grammatical errors. Be wary of poorly written emails."
    },
    {
      title: "Avoid Clicking on Suspicious Links",
      content: "Hover over links to see the actual URL before clicking. Avoid clicking on links that look suspicious."
    }
  ];
  return (
    <div className="left-content">
      <h1>About Phishing Messages and Emails</h1>
      <p>Phishing is a fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity in electronic communication. Phishing messages often contain links to malicious websites or attachments that install malware on the victim's device.</p>
      <p>Common signs of phishing emails include urgent requests for personal information, generic greetings, misspelled words, and suspicious links. It's important to be cautious and verify the authenticity of emails before providing any sensitive information.</p>
      
      <h2>Tips to Recognize Phishing Emails</h2>
      {tips.map((tip, index) => (
        <div key={index} className="tip">
          <div className="tip-title" onClick={() => toggleTip(index)}>
            {tip.title}
          </div>
          {activeTip === index && <div className="tip-content">{tip.content}</div>}
        </div>
      ))}
    </div>
  );
}

function RightContent() {
  const [inputText, setInputText] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCheckScam = () => {
    // Implement the scam checking logic here
    // For demonstration, let's just set a sample output message
    setOutputMessage("The message is not a scam.");
  };


  return (
    <div className="right-content">
      <h2>Check if the message is a scam</h2>
      <p>Please paste your message here.</p>
      <textarea 
        placeholder="Please paste your message here"
        value={inputText}
        onChange={handleInputChange}
      />
      <button className="check-btn" onClick={handleCheckScam}>Check</button>
      <div className="output-box">
        <p>{outputMessage}</p>
      </div>
    </div>
  );
}

export default App;
