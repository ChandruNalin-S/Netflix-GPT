import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();


  const user = useSelector((store)=> store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }


  return (
    <div className='pl-4 absolute w-screen bg-gradient-to-b from-black z-30 flex justify-between items-center'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='log'/>

      {user && 
      (<div className='flex mr-2 space-x-4'>
        <img className='w-10 h-10' src={user?.photoURL} alt='userIcon'/>
        <button className='font-bold text-red-700 text-lg' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
