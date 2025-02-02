// import React from "react";
// import order1 from '../Components/assets/headset2.png'
// import './css/checkout.css'

// export default function Checkout() {
//   return (
//     <div className="checkout-cont">
//       <div className="summary-order">
//         <h1>Summary Order</h1>
//         <p>
//           Check your items to confirm that all orders are correct and your
//           shipping experience for have a better experience
//         </p>
//         <div className="ordered-item">
//           <img src={order1} alt="" />
//           <div className="ordered-item-desc">
//             <b>
//               <h3>Uh3holstered Bed</h3>
//             </b>
//             <p>
//               Upholstered beds have frames that are made of a variety of
//               materials including suede, velvet, and faux leather.
//             </p>
//             <b>
//               <br />
//               <h3>$200.00</h3>
//             </b>
//           </div>
//         </div>
//         <div className="ordered-item">
//           <img src={order1} alt="" />
//           <div className="ordered-item-desc">
//             <b>
//               <h3>Uh3holstered Bed</h3>
//             </b>
//             <p>
//               Upholstered beds have frames that are made of a variety of
//               materials including suede, velvet, and faux leather.
//             </p>
//             <b>
//               <br />
//               <h3>$200.00</h3>
//             </b>
//           </div>
//         </div>
//       </div>
//       <div className="payment-section">
//         <h1>Final step, make the <br /> payment.</h1>
//         <p>
//           To finalize your subscription, kindly complete your payment using a
//           valid cvard.
//         </p>
//         <div className="payment-form">

//             <div className="input">
//               <label htmlFor="cname">Card Name</label>
//               <input type="text" id="cname" placeholder="Enter your Name" />
//             </div>
//             <div className="input">
//               <label htmlFor="cnum">Card Number</label>
//               <input
//                 type="text"
//                 id="cnum"
//                 placeholder="Enter your card Number"
//               />
//             </div>
//             <div className="d-input">
//               <div className="input">
//               <label htmlFor="edate">Exp Date</label>
//               <input
//                 type="text"
//                 id="edate"
//                 placeholder="19/09"
//               />
//               </div>
//               <div className="input">
//               <label htmlFor="cvc">CVC</label>
//               <input
//                 type="text"
//                 id="cvc"
//               />
//               </div>
//             </div>
//             <div className="input">
//               <label htmlFor="dcode">Discount Code</label>
//               <input type="text" />
//             </div>
//            <div className="form-btn">
//            <button className="pay-btn">Pay Now</button>
//            <button className="cancel-btn">Cancel</button>
//            </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState } from "react";

import { PRODUCTS } from "../product";
import ShopContext from "../context/shop-context";
import { CartItem } from "../Components/cartItem/cartItem";
import "./css/checkout.css";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
// import Product from '../Components/ProductItems/product'
// const [cartItems, setCartItems] = useState(getDefaultCart());

export default function Checkout() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <>
    {totalAmount > 0 ?
      <div className="checkout-cont">
        <div className="summary-order">
          <h1>Summary Order</h1>
          <p>
            Check your items to confirm that all orders are correct and your
            shipping experience for have a better experience
          </p>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
  <br />
          <div className="total">
            <h1>Subtotal : ${totalAmount} </h1>
          </div>
        </div>
        <div className="payment-section">
          <h1>
            Final step, make the <br /> payment.
          </h1>
          <p>
            To finalize your subscription, kindly complete your payment using a
            valid cvard.
          </p>
          <div className="payment-form">
            <div className="input">
              <label htmlFor="cname">Card Name</label>
              <input type="text" id="cname" placeholder="Enter your Name" />
            </div>
            <div className="input">
              <label htmlFor="cnum">Card Number</label>
              <input
                type="text"
                id="cnum"
                placeholder="Enter your card Number"
              />
            </div>
            <div className="d-input">
              <div className="input">
                <label htmlFor="edate">Exp Date</label>
                <input type="text" id="edate" placeholder="19/09" />
              </div>
              <div className="input">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="dcode">Discount Code</label>
              <input type="text" />
            </div>
            <div className="form-btn">
              <button className="pay-btn">Pay Now</button>
              <button className="cancel-btn" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      : <div className="empty-msg"><ShoppingCart className="e-cart"/> <h1>Your Cart Is Empty</h1> </div> }
    </>
  );
}
