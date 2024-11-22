import React, { useState } from "react";
import '../App.css'
function Login({ onSwitchToSignup }) {
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
  
  export default Login;