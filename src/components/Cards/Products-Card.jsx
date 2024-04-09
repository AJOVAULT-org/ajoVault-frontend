import React from 'react'
import CardText from './CardText'
import SmallHeaders from '../headers/headers/SmallHeaders'
import Paragraph from '../paragraphs'

function ProductsCard(props) {
  return (
    <div className='card'>
        <div className="icon"></div>
        <div className="text">
        <SmallHeaders headerText={props.headerText}/>
        <Paragraph ParagraphText={props.ParagraphText}/>
        </div>
    </div>
  )
}

export default ProductsCard;