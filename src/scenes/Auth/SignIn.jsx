import React from 'react'

const SignIn = () => {
  return (
    <div className='signin'>
      <div className='sign'>
        <h2 className="login">Login</h2>
        <label for="email" className="label">Enter mobile number or email</label><br></br>
        <input type="text" className="email"></input>
    {/* <p>Enter mobile number or email</p> */}
    <label for="password" className="label">Enter password</label>
        <input type="text" className="pwd"></input>
    <div className='button'><button className='gold_btn'>Continue</button>
    </div>
    </div>
      <div className='signin__body--create'>
      <a href="url">Create New Account</a>
      <button className='gold_btn'>Create your account</button>
        </div>
    </div>
  )
}

export default SignIn