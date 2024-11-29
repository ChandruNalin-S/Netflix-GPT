import React,{useState,useRef} from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";// this is called API from firebase provided for authentication.
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);// useRef is used of reference inside the field tag like in <p> tag or input tag.
  const password = useRef(null);


  const userName = useRef(null);



  const handleButtonClick = ()=>{
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(password.current.value.length);
    const message = checkValidateData(email.current.value,password.current.value);
    //console.log(message);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userName.current.value , photoURL: USER_AVATAR
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+""+errorMessage);
      });
    }
    else{
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
      });
    }
  }


  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }


  /* we use onSubmit() inside the form,because whenever user click the sig in button inside the form, it will automatically refresh the page,so to avoid this, we use onSubmit={(e)=> e.preventDefault()};
  */

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='h-screen object-cover md:w-screen' src={BG_URL} alt='netflix-background'/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='w-[100%] md:w-[480px] bg-black text-white absolute px-[68px] py-12  my-36 mx-auto right-0 left-0 rounded-md bg-opacity-85'>

        <h2 className='text-3xl w-full font-bold mb-6'>{isSignInForm ? "Sign In": "Sign Up"}</h2>


        {!isSignInForm && <input ref={userName} className='p-4 my-2 w-full rounded-sm bg-black bg-opacity-60 border border-gray-700' type='text' placeholder='Enter Your Full Name'/> }


        <input ref={email} className='p-4 my-2 w-full rounded-sm bg-black bg-opacity-60 border border-gray-700' type='text' placeholder='Email'/>

        <input ref={password} className='p-4 my-2 w-full rounded-sm bg-black bg-opacity-60 border border-gray-700' type='password' placeholder='Password'/>

        <button onClick={handleButtonClick} className='p-3 my-2 bg-red-600 w-full rounded-sm font-semibold'>{isSignInForm? "Sign In":"Sign Up"}</button>

        <p className='text-lg font-semibold text-red-600'>{errorMessage}</p>


        <p className='text-gray-400 text-[16px] font-semibold mt-5'>{isSignInForm ? "New to Netflix?": "Already Registered?"} <span onClick={toggleSignInForm} className='text-white cursor-pointer hover:underline' >{isSignInForm ? "Sign up now":"Sign in now"}</span></p>


      </form>
    </div>
  )
}

export default Login
