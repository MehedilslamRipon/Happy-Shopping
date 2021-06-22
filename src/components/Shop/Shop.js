// dependencies
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';
import './Shop.css';

const Shop = () => {
   const first10 = fakeData.slice(0, 10);

   const [products] = useState(first10);
   const [cart, setCart] = useState([]);

   const handleAddProduct = (product) => {
      const newCart = [...cart, product];

      setCart(newCart);
   };

   return (
      <div>
         <div className="shop-container">
            <div className="products-area">
               {products.map((singleProduct) => (
                  <Product
                     key={singleProduct.key}
                     handleAddProduct={handleAddProduct}
                     product={singleProduct}
                  ></Product>
               ))}
            </div>
            <div className="cart-area">
               <Cart cart={cart}></Cart>
            </div>
         </div>
      </div>
   );
};

export default Shop;
