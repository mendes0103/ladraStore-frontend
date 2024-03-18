import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Publico_Sabio_App from "./publico-sabio";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Configuração do axios
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "link da api";

root.render(
  <React.StrictMode>
    {/* Ferramenta BrowserRouter serve para controle de navegação das rotas */}
    <BrowserRouter>
      <Publico_Sabio_App />
    </BrowserRouter>
  </React.StrictMode>
);

