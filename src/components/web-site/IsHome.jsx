import React from 'react';
import { Link } from 'react-router-dom';
import GetStartedBtn from '../buttons/GetStartedBtn';
function IsHome() {
  return (
    <div className='isHome'>
        <div className="isHome-hero">

            <div className="isHome-text">
                <h1>With your <span>Saving</span></h1>
                <h1>Powe, You can</h1>
                <h1>Build <span>Wealth</span></h1>
               <p>Join other wise Nigerians to revolutionize
                their personal finance, by combining
                individual savings and collaborative
                pooled contributions.</p>
            </div>

            <div className="img-side">
            </div>
        </div>
    <GetStartedBtn />
    </div>
  )
}

export default IsHome