



import "./ecommerce.css"
import React, { useState } from "react";
const imgNew="https://moviesshopco.vtexassets.com/assets/vtex.file-manager-graphql/images/33810ef9-62e0-44c1-b4ee-fed6620479d7___a2489eb5c598b17e108aab4e09852450.png"

function Ecommerce({ product, onAddToCart }) {
  const [inputValue, setInputValue] = useState(1);

  const incrementar = () => {
    setInputValue((prevValue) => prevValue + 1);
  };

  const decrementar = () => {
    if (inputValue > 1) {
      setInputValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div className="ecommerce-item">
      <h3>{product.titulo}</h3>
      <div className="sub-ref">  
          <h4>{product.subtitulo}</h4>
          <p>Ref.237474-110601-S</p>
          <img src={imgNew}/>
      </div>
      <div className="price">
      <p>${product.precio}</p>
      </div>
      
      <br />
      <p>{`¡Solo ${product.cantidad} unidades disponibles!`}</p>
      <div className="tallas">
        {product.tallas.map((talla, index) => (
          <span key={index}>{talla}</span>
        ))}
      </div>
      <div className="pay">
        <div className="cantidad">
          <div className="cantidad-item">
          <span onClick={decrementar}>-</span>
          <input type="number" value={inputValue} readOnly />
          <span onClick={incrementar}>+</span>
          </div>
        </div>
        
        <div className="add-bag">
          <input
            type="button"
            value={"AGREGAR A MI BOLSA"}
            onClick={() => onAddToCart(product, inputValue)}
          />
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;






