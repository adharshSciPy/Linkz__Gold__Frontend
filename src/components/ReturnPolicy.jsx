import React from 'react'
import policyImg from '../assets/policy-1.svg'

const ReturnPolicy = () => {

  const policies = [
    {
      img: policyImg,
      label: '30 Days Return Policy'
    },
    {
      img: policyImg,
      label: '100% Buy Back '
    },
    {
      img: policyImg,
      label: 'Lowest Price Guarentee'
    },
    {
      img: policyImg,
      label: 'BIS Hallmarked'
    }
  ]

  return (
    <div className='returnpolicy'>
      {
        policies.map((item, val) => {
          return (
            <div className="returnpolicy__hero" key={val}>
              <img src={item.img} alt={item.label} />
              <p>{item.label}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ReturnPolicy