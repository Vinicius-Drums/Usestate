// Arquivo: components/UseState.tsx
import React, { useState, ChangeEvent } from "react";
import "../App.css";

// Cria um componente React
const UseStateComponent: React.FC = () => {
  // Utiliza o estado (useState) para gerenciar um input de texto
  const [inputValue, setInputValue] = useState<string>("");

  // Utilize um evento onChange para atualizar o estado conforme o usuário digita
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="card">
      {" "}
      {/* Adiciona a classe .card à div */}
      <label htmlFor="textInput">Digite algo:</label>
      <input
        type="text"
        id="textInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Texto digitado: {inputValue}</p>
    </div>
  );
};

export { UseStateComponent };
