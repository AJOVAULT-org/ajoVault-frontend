import React from 'react';
import SmallHeaders from '../headers/headers/SmallHeaders';
import Paragraph from '../paragraphs';

function ProductsCard(props) {
  return (
    <div className='card'>
        <div className="icon"></div>
        
        <div className="card-text">
        <SmallHeaders headertext={props.headerText} class="card-headers"/>
        <Paragraph ParagraphText={props.ParagraphText}/>
        </div>
    </div>
  );
}

export default ProductsCard;
