import React, { useState } from 'react';

const ChatGPTScreen = ({ openChatModal }) => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'Assistente', message: 'Olá! Como posso te ajudar hoje?' }
  ]);

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Simulação de resposta do ChatGPT
    setChatHistory([...chatHistory, { sender: 'Você', message: userInput }]);
    setTimeout(() => {
      setChatHistory(prevChat => [
        ...prevChat,
        { sender: 'Assistente', message: `Você disse: "${userInput}". Isso é incrível!` }
      ]);
    }, 1000);

    setUserInput('');
  };

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <h2>Assistente de viagens virtual</h2>
        <button onClick={onClose} className="close-button">X</button>
      </div>
      <div className="chat-body">
        {chatHistory.map((entry, index) => (
          <div key={index} className={`chat-message ${entry.sender}`}>
            <strong>{entry.sender}: </strong>
            {entry.message}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatGPTScreen;


// Chat
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Message from './Message';

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     // Fetch messages from the server (replace with your backend endpoint)
//     axios.get('/api/messages')
//       .then(response => setMessages(response.data))
//       .catch(error => console.error('Error fetching messages:', error));
//   }, []);

//   const handleSendMessage = () => {
//     // Send the new message to the server (replace with your backend endpoint)
//     axios.post('/api/messages', { text: newMessage })
//       .then(response => {
//         setMessages([...messages, response.data]);
//         setNewMessage('');
//       })
//       .catch(error => console.error('Error sending message:', error));
//   };

//   return (
//     <div>
//       <div>
//         {messages.map(message => (
//           <Message key={message.id} text={message.text} />
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;