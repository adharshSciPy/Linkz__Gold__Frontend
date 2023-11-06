import React from 'react'

const SignUp = () => {
  return (
      <div className='signup'>
        <div className='signn'>
          <h2 className="account">Create Account</h2>
          <label for="Name" className="label">Name</label>
          <input type="text" className="name"></input>
      <label for="number" className="label">Phone Number</label>
          <input type="text" className="number"></input>
      <div className='button'><button className='gold_btn'>Continue</button>
      </div>
      </div>

      </div>
  )
}

export default SignUp