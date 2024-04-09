import React from 'react';
import SmallHeaders from '../headers/headers/SmallHeaders';
import ProductsCard from '../Cards/Products-Card';

function Products() {
  return (
    <div className='products-section'>
        <SmallHeaders headertext="products" class="products-header"/>
        <div className="products">
            <ProductsCard headerText="individual savings" ParagraphText="automated savings plans with goal setting option"/>
            <ProductsCard headerText="individual savings" ParagraphText="automated savings plans with goal setting option"/>
            <ProductsCard headerText="individual savings" ParagraphText="automated savings plans with goal setting option"/>
            <ProductsCard headerText="individual savings" ParagraphText="automated savings plans with goal setting option"/>
        </div>
    </div>
  );
}

export default Products;
