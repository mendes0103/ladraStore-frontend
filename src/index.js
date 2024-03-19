import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import LadraStore_App from "./ladraStore";
import GlobalStyle from "./style/global.style";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Configuração do axios
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "link da api";

root.render(
  <React.StrictMode>
    {/* Ferramenta BrowserRouter serve para controle de navegação das rotas */}
    <BrowserRouter>
      {/* Componente principal da aplicação */}
      <LadraStore_App />
      {/* Estilo global da aplicação */}
      <GlobalStyle/>
    </BrowserRouter>
    
  </React.StrictMode>
);

