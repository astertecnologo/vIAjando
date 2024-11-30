import React, { useState } from "react";
import '../App.css'
function Signup({ onSwitchToLogin }) {
    return (
      <div>
        <h2>Cadastro</h2>
        <form>
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome" />
          <br />
          <label>Email:</label>
          <input type="email" placeholder="Digite seu email" />
          <br />
          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" />
          <br /><br />
          <button type="submit">Criar Conta</button>
        </form>
        <p>
          Já tem conta?{" "}
          <button onClick={onSwitchToLogin} style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}>
            Login
          </button>
        </p>
      </div>
    );
  }
  
  export default Signup;