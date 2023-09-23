import React from 'react';
import { FeatureBox } from '../../components'
import bgEffect from '../../assets/bg-effect.svg';

const Customer = () => {
  return (
    <div className='customers'>
      <div className="customers__hero">
        <div className="customers__hero--text">
          <p>Buy Digital Gold</p>
          <p>Exchange your Digital Gold with prefered</p>
          <p>partern online and offline</p>
        </div>

        <div className="customers__hero--img">
          <img src={bgEffect} alt="bg-effect" />
        </div>
      </div>
      <FeatureBox />
    </div>
  )
}

export default Customer