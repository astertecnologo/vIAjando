import React from 'react';
import '../App.css'
import logo from '../assets/images/logo.png'
const Header = ({ openModal }) => {
  return (
    <header className="header">
    <div className="header-container">
      {/* Logotipo */}
      <div className="header-logo">
        <img src={logo} alt="Logo vIAjando" />
        <h3>vIAjando</h3>
      </div>

      {/* Links de Navegação */}
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#contatos">Contatos</a>
        <a href="#faq">FAQ</a>
      </nav>

      {/* Botões de Login e Cadastro */}
      <div className="header-actions">
        <button className="btn login-btn" onClick={openModal}>Log in</button>
        <button className="btn signup-btn">Cadastrar</button>
      </div>
    </div>

    {/* Barra de Pesquisa */}
    <div className="header-search">
      <h1>O Melhor site para planejar a sua próxima viagem</h1>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar..." />
        <button>Buscar</button>
      </div>
    </div>
  </header>
);
};

export default Header;