import React, { useState } from 'react';
import { CardS } from "../../style/components"; // Importação do componente CardS
import { BsHeartFill, BsBagFill } from 'react-icons/bs';

function ProductCard() {
  const [heartClicked, setHeartClicked] = useState(false);
  const [bagFilled, setBagFilled] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  const handleAddToBag = () => {
    setBagFilled(true);
  };

  return (
    <CardS className="card">
      
      <div className="card-body">
      <img src="https://tse2.mm.bing.net/th?id=OIP.X_2WbzMeSYUIy5UR883QigHaHa&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
        <h5 className="card-title">Camisa</h5>
        <p className="card-text">Modelo e tipo de tecido</p>
        <a href="#" className="btn btn-primary">Comprar</a>
        <button type="button" className="btn btn-link btn-heart" onClick={handleHeartClick}>
          <BsHeartFill style={{color: heartClicked ? 'red' : 'white'}} />
        </button>
        <button type="button" className="btn btn-link btn-bag" onClick={handleAddToBag}>
          <BsBagFill style={{color: bagFilled ? 'white' : 'blue'}} />
        </button>
      </div>
    </CardS>
  );
}

export default ProductCard;








{/* <div class="container">
  <div class="card">
    <img src="https://tse2.mm.bing.net/th?id=OIP.X_2WbzMeSYUIy5UR883QigHaHa&pid=Api&P=0&h=180" alt="Product Image"/>
    <div class="card-content">
      <h2>Nome do Produto</h2>
      <p>Descrição do produto.</p>
      <p class="price">R$ 99,99</p>
    </div>
  </div>
</div> */}


    
    
    
