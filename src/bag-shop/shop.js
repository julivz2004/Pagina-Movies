
import "../bag-shop/shop.css"
import { faTrashAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

 function Shop({ item, onRemoveFromCart }) {
   const [inputValue, setInputValue] = useState(1);
 
   const incrementar = () => {
     setInputValue((prevValue) => prevValue + 1);
   };
 
   const decrementar = () => {
     if (inputValue > 1) {
       setInputValue((prevValue) => prevValue - 1);
     }
   };

   const cross=()=>{
    document.getElementById('bag').style.display='none'
    document.querySelector('body').style.overflow='visible'
  }
 
   return (
    
     <div className="shop">
       <div className="title">
         <div className="txt">
           <h3>MI BOLSA DE COMPRAS</h3>
         </div>
         <div className="icon" onClick={cross}>
            <FontAwesomeIcon icon={faXmark} />
            </div>
         
       </div>
       <hr />
       <div className="product-bag">
         <div className="img-bag">
           <img src={item.img[0]} alt={item.titulo} />
         </div>
         <div >
          <div className="title-bag">
          <div>
            <h3>{item.subtitulo} </h3>
            </div>
           <div className="icon" onClick={() => onRemoveFromCart(item)}>
           <span><FontAwesomeIcon icon={faTrashAlt} /></span>
         </div>
         </div>
           <h4>{item.titulo}</h4>
           <div>
             <span onClick={decrementar}>-</span>
             <input type="number" value={inputValue} readOnly />
             <span onClick={incrementar}>+</span>
           </div>
           <p>${item.precio * inputValue}</p>
         </div>
       </div>
       <hr />
 
       <div className="down-bag">
         <div className="sub">
           <p>SUBTOTAL</p>
           <p>${item.precio * inputValue}</p>
         </div>
         <div className="cost">
           <p>COSTOS DE ENVÍO</p>
           <p>A calcular</p>
         </div>
         <div className="total">
           <p>TOTAL</p>
           <p>${item.precio * inputValue}</p>
         </div>

         <div className="close-buy">
         <button>FINALIZAR COMPRA</button>
         </div>
         
       </div>
     </div>
   );
 }
 
 export default Shop;
