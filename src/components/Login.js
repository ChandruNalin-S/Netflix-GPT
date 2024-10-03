import React,{useState} from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);


  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg' alt='netflix-background'/>
      </div>
      <form className='bg-black text-white absolute px-[68px] py-12 w-[450px] my-36 mx-auto right-0 left-0 rounded-md bg-opacity-85'>

        <h2 className='text-3xl w-full font-bold mb-6'>{isSignInForm ? "Sign In": "Sign Up"}</h2>


        {!isSignInForm && <input className='p-4 my-2 w-full rounded-sm bg-black bg-opacity-60 border border-gray-700' type='text' placeholder='Enter Your Full Name'/> }


        <input className='p-4 my-2 w-full rounded-sm bg-black bg-opacity-60 border border-gray-700' type='text' placeholder='Email or mobile number'/>


        <input className='p-4 my-2 w-full rounded-sm bg-black bg-opacity-60 border border-gray-700' type='password' placeholder='Password'/>


        <button className='p-3 my-2 bg-red-600 w-full rounded-sm font-semibold'>{isSignInForm? "Sign In":"Sign Up"}</button>


        <p className='text-gray-400 text-[16px] font-semibold mt-5'>{isSignInForm ? "New to Netflix?": "Already Registered?"} <span onClick={toggleSignInForm} className='text-white cursor-pointer hover:underline' >{isSignInForm ? "Sign up now":"Sign in now"}</span></p>


      </form>
    </div>
  )
}

export default Login
