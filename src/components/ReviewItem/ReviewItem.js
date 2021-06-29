// dependencies
import React from 'react';
import './../Product/Product.css';

const ReviewItem = (props) => {
   const { name, quantity, key, price } = props.product;
   const reviewItemStyle = {
      borderBottom: '1px solid lightgray',
      marginBottom: '15px',
      paddingBottom: '5px',
      marginLeft: '50px',
   };
   const childStyle = {
      marginBottom: '10px',
   };

   return (
      <div style={reviewItemStyle} className="review-item">
         <h4 style={childStyle} className="product-name">
            {name}
         </h4>
         <p style={childStyle}><b>Quantity:</b> {quantity}</p>
         <p style={childStyle}><b>Total:</b> ${price}</p>
         <br />
         <button
            onClick={() => {
               props.removeProduct(key);
            }}
            className="btn"
         >
            Remove
         </button>
      </div>
   );
};

export default ReviewItem;
