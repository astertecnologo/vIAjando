import React, { useState } from "react";
import axios from "axios";

const ChatGPTScreen = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "Você é um assistente virtual. Como posso te ajudar?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", { messages: newMessages });

      const assistantMessage = response.data.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Erro ao conectar ao ChatGPT:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: "Desculpe, houve um erro ao processar sua mensagem." },
      ]);
    }

    setUserInput("");
  };

  return (
    <div>
      <h2>ChatGPT</h2>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index} className={msg.role === "user" ? "user-message" : "assistant-message"}>
              <strong>{msg.role === "user" ? "Você" : "Assistente"}:</strong> {msg.content}
            </p>
          ))}
        </div>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="chat-input"
      />
      <button onClick={handleSendMessage} className="send-button">
        Enviar
      </button>
    </div>
  );
};

export default ChatGPTScreen;
