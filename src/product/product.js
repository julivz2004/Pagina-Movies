

import "./product.css";
import data from "../data/galeria.json";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import Ecommerce from "../e-commerce/ecommerce";
import Shop from "../bag-shop/shop";
import Footer from "../footer/footer";

var imgdata = data.img;

function Product() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contador, setContador] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const img = imgdata[contador];

  const slideRight = () => {
    setContador((contador) => (contador + 1) % imgdata.length);
  };

  const slideLeft = () => {
    setContador((contador) => (contador - 1 + imgdata.length) % imgdata.length);
  };

  const handleGalleryClick = (index) => {
    setContador(index);
  };

  

  const handleScrollUp = () => {
    setScrollPosition(0);
    console.log("Scroll Up - New Position:", 0);
  };

  const handleScrollDown = () => {
    setScrollPosition((prevPosition) => Math.min(prevPosition + 1, imgdata.length - 1));
  };
  const handleScrollToTop = () => {
    // Sube al principio
    setScrollPosition(0);
  };
  const handleScrollToBottom = () => {
    // Baja al final
    setScrollPosition(imgdata.length - 2);
  };

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const cross = () => {
    document.getElementById('bag').style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
  };

  

  return (
    <div className="product">
      
      <div className="description-galery">
        <div className="buttons">
        <button onClick={handleScrollToTop}><FontAwesomeIcon icon={faAngleUp} className="btn0" /></button>
        <button onClick={handleScrollToBottom}><FontAwesomeIcon icon={faAngleDown} className="btn1" /></button>
        </div>
        
        <p>Movies/ Hombre /Chaquetas y Buzos/ Chaqueta de la Nasa multicolor con cierre para hombre </p>
        <div className="galery-slider">

          <div className="galery" >
            {imgdata.map((url, index) => (
              <img key={index} src={url} alt={`imagen-${index}`} onClick={() => handleGalleryClick(index)} style={{ transform: `translateY(-${scrollPosition * 100}%)` }} />
            ))}
            
          </div>
          
          
          <div className="slider">
            <div className="left" onClick={slideLeft}>
              <FontAwesomeIcon icon={faAngleLeft} className="fa-left" />
            </div>
            <div className="imagenes">
              <img src={img} alt={`imagen-${contador}`} />
            </div>
            <div className="right" onClick={slideRight}>
              <FontAwesomeIcon icon={faAngleRight} className="fa-right" />
            </div>
          </div>
        </div>
      </div>

      <div className="eccomerce">
        <Ecommerce product={data} onAddToCart={addToCart} />
      </div>

      <div className="bag-shop" id="bag">
        {cartItems.length > 0 ? (
          <Shop item={cartItems[0]} onRemoveFromCart={removeFromCart} />
        ) : (
          <div>
            <div className="title">
              <div className="txt">
                <h3>MI BOLSA DE COMPRAS</h3>
              </div>
              <div className="icon" onClick={cross}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <hr />
            <p>La bolsa de compras está vacía.</p>
          </div>
        )}
      </div>

      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default Product;

