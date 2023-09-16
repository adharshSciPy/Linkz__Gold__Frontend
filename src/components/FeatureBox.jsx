import React from 'react'

const FeatureBox = () => {

  const features = ['Saftey Guaranteed', 'Sell anytime from home Saftey', 'Saftey convert to physical gold', 'Saftey buy as low as 100']

  return (
    <div className='featurebox'>
      {
        features.map((item, val) => {
          return (
            <div className="featurebox__boxes" key={val}>
              <p>{item}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FeatureBox