import React from "react";
import order1 from '../Components/assets/headset2.png'
import './css/checkout.css'

export default function Checkout() {
  return (
    <div className="checkout-cont">
      <div className="summary-order">
        <h1>Summary Order</h1>
        <p>
          Check your items to confirm that all orders are correct and your
          shipping experience for have a better experience
        </p>
        <div className="ordered-item">
          <img src={order1} alt="" />
          <div className="ordered-item-desc">
            <b>
              <h3>Uh3holstered Bed</h3>
            </b>
            <p>
              Upholstered beds have frames that are made of a variety of
              materials including suede, velvet, and faux leather.
            </p>
            <b>
              <br />
              <h3>$200.00</h3>
            </b>
          </div>
        </div>
        <div className="ordered-item">
          <img src={order1} alt="" />
          <div className="ordered-item-desc">
            <b>
              <h3>Uh3holstered Bed</h3>
            </b>
            <p>
              Upholstered beds have frames that are made of a variety of
              materials including suede, velvet, and faux leather.
            </p>
            <b>
              <br />
              <h3>$200.00</h3>
            </b>
          </div>
        </div>
      </div>
      <div className="payment-section">
        <h1>Final step, make the <br /> payment.</h1>
        <p>
          To finalize your subscription, kindly complete your payment using a
          valid cvard.
        </p>
        <div className="payment-form">
          <form>
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
              <input
                type="text"
                id="edate"
                placeholder="19/09"
              />
              </div>
              <div className="input">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
              />
              </div>
            </div>
            <div className="input">
              <label htmlFor="dcode">Discount Code</label>
              <input type="text" />
            </div>
           <div className="form-btn">
           <button className="pay-btn">Pay Now</button>
           <button className="cancel-btn">Cancel</button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
}
