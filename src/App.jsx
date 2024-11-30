import { useState } from 'react'
import './App.css'
import React from "react";
import ReactModal from "react-modal";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from './components/Header';
import Packages from './components/Packages';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import ChatGPTScreen from './components/ChatGPTScreen';

ReactModal.setAppElement("#root");
function App() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //Abrir e fechar o chat
  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);
  return (
    <div className="App">
      <Header openModal={openModal} />
       {Login}
       <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <Login closeModal={closeModal} />
      </ReactModal>

      <Packages />
      <Highlights />
      <Footer openChatModal={openChatModal} />
       {ChatGPTScreen}
       <ReactModal
        isOpen={isChatModalOpen}
        onRequestClose={closeChatModal}
        contentLabel="Chat Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="chat-container">
          <button className="close-button" onClick={closeChatModal}>
            &times;
          </button>
          <ChatGPTScreen /> {ChatGPTScreen}
          {ChatGPTScreen}
        </div>
      </ReactModal>
      <button onClick={openChatModal} className="open-chat-button">
        Conversar com assistente virtual
      </button>
      
    </div>
  );
}

export default App;