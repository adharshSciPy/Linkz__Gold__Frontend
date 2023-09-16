import React from 'react'
import { FeatureBox, Partner } from '../../components'
import bgEffect from '../../assets/bg-effect.svg'

const ExchangePage = () => {
  return (
    <div className="exchange">
      <div className="exchange__hero">
        <div className="exchange__text">
          <p>Exchange of</p>
          <p>Jwellery</p>
          <p>Exchange your digital gold with prefered</p>
          <p>partner online and offline</p>
        </div>

        <div className="exchange__img">  
          <img src={bgEffect} alt="background-gradient-effect" />
        </div>
      </div>

      <FeatureBox />  
      <Partner />
    </div>
  )
}

export default ExchangePage