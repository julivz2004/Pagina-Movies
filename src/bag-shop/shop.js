/*import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/galeria.json"
import { useState } from "react";

var imgdata=data.img

function Shop(){
    const [inputValue, setInputValue] = useState(1);

  const incrementar = () => {
    setInputValue(prevValue => prevValue + 1);
  };

  const decrementar = () => {
    if (inputValue > 0) {
      setInputValue(prevValue => prevValue - 1);
    }
  };
    return(
        <div>
        <div className="title">
            <div className="txt"><h3>MI BOLSA DE COMPRAS</h3></div>
            <div className="icon"><FontAwesomeIcon icon={faXmark} /></div>
          </div>
          <hr/>
          <div className="product-bag">
           <div className="img-bag">
            <img src={imgdata[0]}/>
           </div>
           <div>
            <h3>nasa</h3>
            <button>delate</button>
            <h4>CHAQUETA DE LA NASA</h4>
            <div>
               <span onClick={decrementar}>-</span>
               <input type="number" value={inputValue} readOnly />
               <span onClick={incrementar}>+</span>
             </div>
             <p> ${data.precio} </p>
           </div>
          </div>
          <hr/>

          <div>
            <div>
            <p>SUBTOTAL</p>
            <p>${data.precio}</p>
            </div>
            <div>
            <p>COSTOS DE ENVÍO</p>
            <p>A calcular</p>
            </div>
            <div>
            <p>TOTAL</p>
            <p>${data.precio}</p>
            </div>

             <button>FINALIZAR COMPRA</button>
            
          </div>
        </div>
    )
 }

 export default Shop;*/

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
