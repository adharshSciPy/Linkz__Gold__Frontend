import React from 'react'
import bgEffect from '../../assets/bg-effect.svg'

const ExchangePage = () => {
  return (
    <div className='exchange'>
      <div className="exchange__body">
        <div className="exchange__hero">
          <p>Exchange of</p>
          <p>Jwellery</p>
          <p>Exchange your digital gold with prefered partner</p>
          <p>online and offline</p>
        </div>

        <div className="exchange__img">
          <img src={bgEffect} alt="background-gradient-effect" />

          <div className="exchange__ratecard">
            <div>
              <p>Exchange Rate</p>
            </div>
            <div className="exchange__minicard">

            </div>

            <div className="exchange__subcard">
              {/* <div className="exchange__text-lg">
                <p> In rupees </p>
                <p> In Grams </p>
              </div>

              <div className="exchange__text-sm">
                <p> &#8377; 5,088 </p>
                <p> == 1.000gm </p>
              </div> */}

              <table>
                <tr>
                  <td>In rupees</td>
                  <td>In Grams</td>
                </tr>

                <tr>
                  <td> &#8377; 5,088 </td>
                  <td> == 1.000gm </td>
                </tr>
              </table>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default ExchangePage