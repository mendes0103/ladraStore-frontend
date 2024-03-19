import React from "react";
import ContainerS from "../../style/pages";
import Header from "../../components/header";

// No react as funções são componentes que tem que ser exportados para serem usados em outros arquivos.
// O html e JavaScript são misturados, por isso o nome JSX (JavaScript XML).
// Entao o que parece ser html é na verdade JSX.
function Home() {
  return (
    <ContainerS>
      <Header />
      <h1>Welcome to Home Page</h1>
    </ContainerS>
  );
}

export default Home;
