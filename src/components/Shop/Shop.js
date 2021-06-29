// dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';
import './Shop.css';
import {
   addToDatabaseCart,
   getDatabaseCart,
} from './../../utilities/databaseManager';

const Shop = () => {
   const first10 = fakeData.slice(0, 10);

   const [products, setProducts] = useState(first10);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      const savedCart = getDatabaseCart();
      const productKeys = Object.keys(savedCart);
      const previousCart = productKeys.map((existingKey) => {
         const product = fakeData.find((pd) => pd.key === existingKey);
         product.quantity = savedCart[existingKey];
         return product;
      });
      setCart(previousCart);
   }, []);

   const handleAddProduct = (product) => {
      const toBeAddedKey = product.key;

      const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);

      let count = 1;
      let newCart;
      if (sameProduct) {
         count = sameProduct.quantity + 1;
         sameProduct.quantity = count;

         const others = cart.filter((pd) => pd.key !== toBeAddedKey);

         newCart = [...others, sameProduct];
      } else {
         product.quantity = 1;
         newCart = [...cart, product];
      }

      setCart(newCart);

      addToDatabaseCart(product.key, count);
   };

   return (
      <div>
         <div className="shop-container">
            <div className="products-area">
               {products.map((singleProduct) => (
                  <Product
                     showAddToCart={true}
                     key={singleProduct.key}
                     handleAddProduct={handleAddProduct}
                     product={singleProduct}
                  ></Product>
               ))}
            </div>
            <div className="cart-area">
               <Cart cart={cart}>
                  <Link to="/review">
                     <button className="btn"> Order Review </button>
                  </Link>
               </Cart>
            </div>
         </div>
      </div>
   );
};

export default Shop;
