// dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from './../../fakeData/index';
import Product from './../Product/Product';

const ProductDetails = () => {
   let { productKey } = useParams();
   const product = fakeData.find((pd) => pd.key === productKey);

   return (
      <div>
         <h1> Your Product Details: </h1>
         <Product showAddToCart={false} product={product}></Product>
      </div>
   );
};

export default ProductDetails;
