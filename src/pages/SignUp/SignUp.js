import React from 'react'
import './signup.css'

function SignUp() {

  return (
    <div className='sign-up-form-container'>
        <img src='../../assests/movie-theatre.webp' alt='People watch movies.'/>
        <h3>Sign Up</h3>
        <p>Please fill in this form to create an account.</p>
        <h5>Email</h5>
        <input />
        <h5>Password</h5>
        <input />
        <h5>Username</h5>
        <input />
        <button>Cancel</button>
        <button>Sign Up</button>
        <p>Already have an account? Sign In!</p> 
    </div>
  )
}

export default SignUp