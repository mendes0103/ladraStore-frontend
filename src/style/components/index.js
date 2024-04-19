import styled from "styled-components";
import Card from "../../components/cards";

// HeaderS é um componente estilizado, utilizando styled-components que a mesma coisa que css.
const HeaderS = styled.header`
display: flex;
height: 150px;
width: 100%;
background-color: black;
background-image: linear-gradient(black, white, black);
flex-direction: column;
height: auto;
margin=0;

#logo{ 
    display: grid;
    margin-left: auto;
    margin-right: auto;
    width: 210px;
    height: 150px;
    
  }

  button{
    background-color: black;
    color: aliceblue;
    width: 6rem;
    border-radius: 10px 10px 10px 10px;
  }
  button:hover{
    cursor: pointer;
    background-color: transparent;
  }

  .btn-area{
    display: flex;
 padding: 0.3rem 0.3rem 0 0.3rem;
 flex-direction: column;
 align-items: flex-end;
 position: absolute;
  }
`; 

export const Navs= styled.nav`
/* barra de nav */
background: linear-gradient(green, yellow, red) !important; 

.fundovermelho{
  background: linear-gradient(120deg, #ff0000, #ffff00, #008000) !important;

  
 
  .offcanvas {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    background-color: #343a40;
    color: white;
    padding: 20px;
    z-index: 1050;
    transition: transform 0.3s ease;
    transform: translateX(100%);
  }
  
  .offcanvas.show {
    transform: translateX(0);
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: var(--bs-navbar-toggler-icon-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}
  
  .offcanvas-perso-header {
    background: green;
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
  }

  .cor-header-slogan{
    background-color: yelow !important;
  }
  
  .offcanvas-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .btn-close {
    color: purples;
    font-size: 1.5rem;
  }
  
  .offcanvas-body {
    padding: 0;
  }
  
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-item {
    margin-bottom: 10px;
  }
  
  .nav-link {
    color: purple;
    text-decoration: none;
  }
  
  .nav-link:hover {
    color: yellow;
  }
  
  .dropdown-menu {
    background-color: green;
  }
  
  .dropdown-item {
    color: white;
  }
  
  .dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .btn-success:hover {
    background-color: #218838;
  }
  

  #offcanvasDarkNavbar {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    background-color: purple;
    color: white;
    padding: 20px;
    z-index: 1050;
    transition: transform 0.3s ease;
    transform: translateX(100%);
  }
  
  #offcanvasDarkNavbar.show {
    transform: translateX(0);
  }
  
  .offcanvas-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .btn-close {
    color: purple;
    font-size: 1.5rem;
  }
  
  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-item {
    margin-bottom: 10px;
  }
  
  .nav-link {
    color: purple;
    text-decoration: none;
  }
  
  .nav-link:hover {
    color: yelow;
  }
  
  .dropdown-menu {
    background-color: green;
  }
  
  .dropdown-item {
    color: white;
  }
  
  .dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .btn-success:hover {
    background-color: #218838;
  }
  

}
`; 
export const CardS= styled.div`


.card {
  width: 18rem !important; /* largura do card */
  border: 1px solid #ccc; /* borda do card */
  border-radius: 8px; /* borda arredondada do card */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* sombra do card */
}

.card-img-top {
  
  width: 100%; /* largura total */
  height: auto; /* altura automática mantendo a proporção */
  border-top-left-radius: 8px; /* borda arredondada no canto superior esquerdo */
  border-top-right-radius: 8px; /* borda arredondada no canto superior direito */
}

.card-body {
  width: 18rem;
  background: linear-gradient(to bottom, grey, black, white); /* fundo do card */
  padding: 10px; /* preenchimento interno */
}

.card-title {
  font-size: 1.5rem; /* tamanho do título */
  margin-bottom: 10px; /* espaço abaixo do título */
}

.card-text {
  font-size: 1rem; /* tamanho do texto */
  color: #666; /* cor do texto */
}

.btn btn-primary {
  background-color: blue; /* fundo transparente */
  border: none; /* sem borda */
  padding: 0; /* nenhum preenchimento */
  cursor: pointer; /* cursor ao passar */
}

.btn btn-link btn-heart{
  
}
/* Estilos para o ícone do coração */
.btn-heart .BsHeartFill {
  color: white; /* cor do ícone do coração */
  size: 50px;
  
}

/* Estilos para o ícone da sacola */
.btn-bag .BsBagFill {
  color: black; /* cor do ícone da sacola */
}

.active {
  color: red; /* cor quando o botão é clicado */
}







`;

export default HeaderS;


