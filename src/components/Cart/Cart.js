// dependencies
import React from 'react';
import './Cart.css';
import './../Product/Product.css';

const Cart = (props) => {
   const cart = props.cart;
   // console.log(cart);
   const total = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
   );

   let shipping = 0;
   if (total > 35) {
      shipping = 0;
   } else if (total > 15) {
      shipping = 4.99;
   } else if (total > 0) {
      shipping = 12;
   }

   const tax = Math.round(total / 10);

   const grandTotal = Math.round(total + shipping + tax);

   return (
      <div className="cart">
         <div className="order-summary">
            <h2> Order Summary </h2>
         </div>

         <p>Items Ordered: {props.cart.length} </p>
         <p>Shipping Cost: ${shipping}</p>
         <p>Tax + Vat: ${tax}</p>
         <p>
            <b>Total Price: ${grandTotal}</b>
         </p>
         <br />
         {
            props.children
         }
      </div>
   );
};

export default Cart;
