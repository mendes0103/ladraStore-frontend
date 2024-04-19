import React from "react";
import ContainerS from "../../style/pages";
import Header from "../../components/header";
import NavbarL from "../../components/navbar";
import Card from "../../components/cards";

// No react as funções são componentes que tem que ser exportados para serem usados em outros arquivos.
// O html e JavaScript são misturados, por isso o nome JSX (JavaScript XML).
// Entao o que parece ser html é na verdade JSX.
function Home() {
  return (
    <>
    <NavbarL/>
    <Header />
    <ContainerS>
     <Card/>
      
    </ContainerS>
    </>
  );
}

export default Home;
