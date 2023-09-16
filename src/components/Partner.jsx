import React from 'react';
import tanishq from '../assets/tanishq.svg';
import augmont from '../assets/augmont.svg';

const Partner = () => {
    return (
        <div className='partner'>
            <div className="partner__body">
                <div className="partner__text">
                    <p>Our Exchange</p>
                    <p>Partners</p>
                    <button>Digital Gold</button>
                </div>
                <div>
                    <img src={tanishq} alt="tanishq" />
                </div>
                <div>
                    <img src={augmont} alt="augmont" />
                </div>
            </div>
        </div>
    )
}

export default Partner