import styled from "styled-components";

// HeaderS é um componente estilizado, utilizando styled-components que a mesma coisa que css.
const HeaderS = styled.header`
display: flex;
height: 150px;
width: 100%;
background-color: red;
background-image: linear-gradient(red, yellow, green);
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

export default HeaderS;