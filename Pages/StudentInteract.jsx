import React, { useState } from 'react';
import "./StudentInteract.css";
import UserHeader from "../components/UserHeader";
function StudentInteract() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '' || file) {
      const newMessage = {
        text: inputValue.trim(),
        file: file
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="chat-box">
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="text">{message.text}</div>
            {message.file && (
              <div className="file">
                <span>Uploaded file: {message.file.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default StudentInteract;