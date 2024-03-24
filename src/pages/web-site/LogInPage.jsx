import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import Paragraph from '../../components/paragraphs';

function LogInPage() {
  return (
    <section className='Log-in'>
        <div className="text-side">
        <img src={ajoLogo2} alt="Ajo Logo" />
        <div className="text">
          <h1>achieve your financial goals with our solutions</h1>
          <Paragraph class="bright-text" ParagraphText="Join other wise Nigerians to revolutionise their personal finance by combining individual savings with pool contribution." />
        </div>
      </div>
    </section>
  )
}

export default LogInPage;