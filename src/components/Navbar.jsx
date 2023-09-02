import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(true) //mocking logged in user
  // nav items
  const navitems = [
    {
      label: "Jewllery Exchange",
      to: "/exchange"     //replace # with respective route path 
    },
    {
      label: "Ornaments",
      to: "/ornaments"
    },
    {
      label: "Buy Coins",
      to: "/buy-coins"
    },
    {
      label: "For Customers",
      to: "/customer"
    },
    {
      label: "Lease",
      to: "/lease"
    },
    {
      label: "Partner with Us",
      to: "/partner"
    },
    {
      label: "About Us",
      to: "/about"
    }
  ]

  return (
    <nav className='navbar'>
      <div className="navbar__top">
        <div className="navbar__search">
          <div className="navbar__select">
            <select name="" id="">
              <option value="#">All Categories</option>
              <option value="#">Gold</option>
              <option value="#">Silver</option>
            </select>
          </div>

          <div className="navbar__input">
            <input type="text" placeholder="I'm looking for..." />
            <button>
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        {
          !loggedIn ?
            <div className="navbar__authbtns">
              <button>Login</button>
            </div>
            :
            <div className="navbar__roundbtns">
              <button><i class="fa-regular fa-heart"></i></button>
              <button><i class="fa-regular fa-user"></i></button>
              <button><i class="fa-solid fa-bag-shopping"></i></button>
            </div>
        }
      </div>

      <div className="navbar__down">
        {
          navitems.map((item, val) => {
            return (
              <NavLink to={item?.to} key={val}>
                <p>{item.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar