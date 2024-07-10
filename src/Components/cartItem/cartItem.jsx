import React from 'react'
import './cartitem.css'
export const  CartItem = (props) => {
    const { id, productName, price, productImage, description } = props.data;


  return (
    <div>
              <div className="ordered-item">
           <img src={productImage} alt="" />
           <div className="ordered-item-desc">
             <b>
               <h3>{[productName]}</h3>
             </b>
             <p>
               Upholstered beds have frames that are made of a variety of
               materials including suede, velvet, and faux leather.
             </p>
             <b>
               <br />
               <h3>$ {price}</h3>
             </b>
           </div>
         </div>
    </div>
  )
}
