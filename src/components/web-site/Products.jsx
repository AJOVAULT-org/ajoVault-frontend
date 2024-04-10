import React from 'react';
import SmallHeaders from '../headers/headers/SmallHeaders';
import ProductsCard from '../Cards/Products-Card';
import iconOne from '../../../public/assets/icons/icon1.png'

function Products() {
  return (
    <div className='products-section'>
        <SmallHeaders headertext="products" class="products-header"/>
        <div className="products">
            <ProductsCard
            icon={<img src={iconOne} alt="Icon One" />}
            headerText="individual savings"
            ParagraphText="automated savings plans with goal setting option"
            />
            <ProductsCard headerText="Pooled Contributions" ParagraphText="Users can create orbe merged to asavings pool batch"/>
            <ProductsCard headerText="Community Building" ParagraphText="Shared achievementin community forums for financial tips, and success stories "/>
            <ProductsCard headerText="Security & Privacy" ParagraphText="Robust encryption and secure authentication for user data"/>
        </div>
    </div>
  );
}

export default Products;
