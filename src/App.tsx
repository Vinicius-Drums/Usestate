// Arquivo: App.tsx
import React from "react";
import { UseStateComponent } from "./components/Usestate";
import suaOpiniaoImage from "./Imagens/Suaopiniao.png"; // Importe a nova imagem

const App: React.FC = () => {
  return (
    <div>
      <img src={suaOpiniaoImage} alt="Sua Opinião" className="logo" />
      <h1>De sua Opinião</h1>
      <UseStateComponent />
    </div>
  );
};

export default App;
