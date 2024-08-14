import React, { useEffect, useState } from "react";

import eye_icon from "/img/svgs/olhoroxoaberto.svg"
import hiddenEye_icon from "/img/svgs/olhofechado.svg"

import "./passwordInput_style.css";

function PasswordInput({ id, state, onChange, showRegexError, setResultRegex, placeholder }) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [ passwordCorrect, setPasswordCorrect ] = useState(false)

  useEffect(() => {
    validatePassword(state);
  }, [state])
  
  const validatePassword = (password) => {
    
    // Expressão regular para garantir que a senha seja forte
     const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (password && showRegexError) {
      if (strongPasswordRegex.test(password)) {
          setResultRegex(true)
          setPasswordCorrect(false)
      
      } else {
          setResultRegex(false)
          setPasswordCorrect(true)
      }
    } 
    
    if (password == "") setPasswordCorrect(false)
  };

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="inputPassword-bodyContainer">

        <div className="inputPassword-container">
        <input
            type={isPasswordVisible ? "text" : "password"}
            id={id}
            className="passwordInput"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={state}
            required
            />
        <img
            className="eye-icon"
            src={isPasswordVisible ? hiddenEye_icon : eye_icon}
            alt="eye-icon"
            onClick={handleTogglePassword}
            />
        </div>

        { passwordCorrect && showRegexError ? (
        
            <div className="password-error">
                <strong>Senha fraca!</strong>
                <p>Deve conter pelo menos 8 caracteres:</p>
                <ul>
                    <li>Incluindo letras maiúsculas e minúsculas</li>
                    <li>Números</li>
                    <li>Caracteres especiais</li>
                </ul>
            </div>
            
            ) : "" }
    
    </div>
  );
}

export default PasswordInput;