import React, { useState } from "react";
import '../App.css'
const Login = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com o backend para verificar o login
    console.log("Email:", email, "Senha:", password);
    closeModal(); // Fecha o modal após o login (ajuste conforme necessário)
  };

  return (
    <div className="login-container">
      {/* Botão de fechar no topo */}
      <button className="close-button" onClick={closeModal}>
        &times;
      </button>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Entrar
        </button>
        <button type="button" onClick={closeModal} className="btn-cancel">
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Login;
/*function Login({ onSwitchToSignup }) {
    const [step, setStep] = useState(1); // 1: Tela de e-mail, 2: Tela de senha
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailSubmit = (e) => {
      e.preventDefault();
      if (email) setStep(2);
    };
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email, "Senha:", password); // Aqui você pode implementar a lógica de login.
    };
  
    return (
      <div>
        {step === 1 && (
          <div>
            <h2>Qual é o seu e-mail?</h2>
            <form onSubmit={handleEmailSubmit}>
              <label>Email:<br></br></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
              <br /><br />
              <button type="submit">Continuar</button>
            </form>
            <p>
              Não tem conta?{" "}
              <button
                onClick={onSwitchToSignup}
                style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        )}
  
        {step === 2 && (
          <div>
            <h2>Digite sua senha</h2>
            <form onSubmit={handleLoginSubmit}>
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
              <br /><br />
              <button type="submit">Entrar</button>
            </form>
            <p>
              Não é você?{" "}
              <button
                onClick={() => setStep(1)}
                style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}
              >
                Voltar
              </button>
            </p>
          </div>
        )}
      </div>
    );
  }
  
  export default Login;*/