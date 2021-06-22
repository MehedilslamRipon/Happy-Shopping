// dependencies
import React from 'react';
import './Product.css';
import cart from './../../images/shopping-cart.svg';

const Product = (props) => {
   // console.log(props.handleAddProduct);

   const { name, img, seller, price, stock } = props.product;

   return (
      <div className="single-product-container">
         <div className="img-area">
            <img src={img} alt="" />
         </div>
         <div className="product-info">
            <h4 className="product-name">{name}</h4>
            <p className="seller-name">by: {seller}</p>
            <p className="price">
               <b>Price: ${price}</b>
            </p>
            <p className="stock"> Only {stock} left in stock - order soon! </p>
            <button
               onClick={() => props.handleAddProduct(props.product)}
               className="btn"
            >
               <span className="cart-icon">
                  <img src={cart} alt="cart" />
               </span>
               Add to cart
            </button>
         </div>
      </div>
   );
};

export default Product;
