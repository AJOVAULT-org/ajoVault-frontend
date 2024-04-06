import React from 'react';

function IsHome() {
  return (
    <div className='isHome'>
        <div className="isHome-hero">

            <div className="text-side">
                <h1>With your <span>Saving</span></h1>
                <h1>Powe, You can</h1>
                <h1>Build <span>Wealth</span></h1>
               <p>Join other wise Nigerians to revolutionize
                their personal finance, by combining
                individual savings and collaborative
                pooled contributions.</p>
            </div>

            <div className="img-side">
                {/* {heroIMg} */}
            </div>
        </div>
        <Link to={"/signup"}>
            <button className="bg-primary lg:px-12 px-4 py-4 rounded-[8px] text-white lg:text-[24px] font-semibold">
              Get Started
            </button>
          </Link>
    </div>
  )
}

export default IsHome