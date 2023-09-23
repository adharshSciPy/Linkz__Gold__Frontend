import React from 'react'
import { FeatureBox } from '../../components'
import bgEffect from '../../assets/bg-effect.svg'

const Buycoin = () => {
  return (
    <div className='buycoins'>
      <div className="buycoins__hero">
        <div className="buycoins__hero--text">
          <p>Buy Gold Coin</p>
          <p>Buy gold coin and customise your own Jwellery</p>
          <button className='gold_btn'>Buy Now</button>
        </div>

        <div className="buycoins__hero--img">
          <img src={bgEffect} alt="bg-effect" />
        </div>
      </div>
      <FeatureBox />
    </div>
  )
}

export default Buycoin