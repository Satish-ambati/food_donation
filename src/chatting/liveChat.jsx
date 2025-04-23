import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LiveChatUI = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);
  const handleStartSession = () => {
    setSessionStarted(true);
  };
  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, { sender: 'Donor', text: message }]);
      setMessage('');
    }
  };
  const handleEndSession = () => {
    alert("Thank you for your support! The chat has ended.");
    
    navigate("/donatehistory")
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {!sessionStarted && !sessionEnded && (
        <button
          onClick={handleStartSession}
          className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
        >
          Start Chat with NGO
        </button>
      )}
      {sessionStarted && !sessionEnded && (
        <div className="flex flex-col gap-4">
          <div className="overflow-y-auto max-h-72 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === 'Donor' ? 'text-right bg-teal-100' : 'text-left bg-gray-200'
                } p-2 rounded-lg mb-2`}
              >
                <p className="font-semibold">{msg.sender}:</p>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleSendMessage}
            className="w-full py-3 mt-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Send
          </button>
          <button
            onClick={handleEndSession}
            className="w-full py-3 mt-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            End Chat (Food Delivered)
          </button>
        </div>
      )}
    </div>
  );
};
export default LiveChatUI;
