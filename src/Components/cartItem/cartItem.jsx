import React, { useContext } from "react";
import {ShopContext} from '../../context/shop-context'




export const CartItem = (props) => {
  const { id, productName, price, productImage, description } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartCount } = useContext(ShopContext);

  
  return (
    <div>
      <div className="ordered-item">
        <img src={productImage} alt="" />
        <div className="ordered-item-desc">
          <b>
            <h3>{[productName]}</h3>
          </b>
          <p>
            Upholstered beds have frames that are made of a variety of materials
            including suede, velvet, and faux leather.
          </p>
          <b>
            <br />
            <h3>$ {price * cartItems[id]}</h3>
          </b>
          <div className="count-btn">
            <button onClick={() =>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange= {(e) => updateCartCount(Number(e.target.value),id)}/>
            <button onClick={() =>addToCart(id)}>+</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};



export default CartItem