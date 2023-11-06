import React from 'react'
import girl1 from '../../assets/ornaments-girl-1.svg';
import girl2 from '../../assets/ornaments-girl-2.svg';
import ring1 from '../../assets/ring-1.svg';
import ring2 from '../../assets/ring-2.svg';
import ring3 from '../../assets/ring-3.svg';

const Ornaments = () => {
  const cards = [
    {
      image: ring1,
      label: "Jwel Gem ring1",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring2",
      category: "Emerald",
      price: "2 Lakhs",
    },
    {
      image: ring3,
      label: "Jwel Gem ring3",
      category: "Sapphire",
      price: "3 Lakhs",
    },
    {
      image: ring1,
      label: "Jwel Gem ring4",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring5",
      category: "Emerald",
      price: "2 Lakhs",
    },
    {
      image: ring3,
      label: "Jwel Gem ring6",
      category: "Sapphire",
      price: "3 Lakhs",
    },
    {
      image: ring1,
      label: "Jwel Gem ring7",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring8",
      category: "Emerald",
      price: "2 Lakhs",
    },
    {
      image: ring3,
      label: "Jwel Gem ring9",
      category: "Sapphire",
      price: "3 Lakhs",
    },
    {
      image: ring1,
      label: "Jwel Gem ring10",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring11",
      category: "Emerald",
      price: "2 Lakhs",
    },
    {
      image: ring3,
      label: "Jwel Gem ring12",
      category: "Sapphire",
      price: "3 Lakhs",
    },
    {
      image: ring1,
      label: "Jwel Gem ring13",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring14",
      category: "Emerald",
      price: "2 Lakhs",
    },
    {
      image: ring3,
      label: "Jwel Gem ring15",
      category: "Sapphire",
      price: "3 Lakhs",
    },
    {
      image: ring1,
      label: "Jwel Gem ring16",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring17",
      category: "Emerald",
      price: "2 Lakhs",
    },
    {
      image: ring3,
      label: "Jwel Gem ring18",
      category: "Sapphire",
      price: "3 Lakhs",
    },
    {
      image: ring1,
      label: "Jwel Gem ring19",
      category: "Diamond",
      price: "1 Lakhs",
    },
    {
      image: ring2,
      label: "Jwel Gem ring20",
      category: "Emerald",
      price: "2 Lakhs",
    },
  ]
  return (
    <div className='ornaments'>
      <div className="ornaments__header">
        <div className="ornaments__header--images">
          <img src={girl1} alt="header-girl-1" />
          <img src={girl2} alt="header-girl-2" />
        </div>
      </div>

      <div className="ornaments__body">
        <div className="ornaments__body__filter">
          <div className="ornaments__body__filter__box">
            <div className="ornaments__body__filter__box__header">
              filter
            </div>
          </div>
        </div>

        <div className="ornaments__body__products">
          {
            cards.map((item, val) => {
              return (
                <>
                  <div className="ornaments__body__products__card" key={val}>
                    <img src={item?.image} alt="dynamic-product-image" />
                    <div className="ornaments__body__products__card__details">
                      <p>{item?.label}</p>
                      <div className="ornaments__body__products__card__details--flex">
                        <p>{item?.category}</p>
                        <p>{item?.price} /-</p>
                      </div>

                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Ornaments