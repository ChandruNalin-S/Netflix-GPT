import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOG_URL, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user);

  const langTranslateShow = useSelector((store)=> store.gpt.showGptSearch);


  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error');
    });
  }


  const handleGptSearchClick= ()=>{
    dispatch(toggleGptSearchView());
  }

  const handleChangeLanguage = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
      navigate('/browse');
    } else {
      dispatch(removeUser());
      navigate('/');
    }
    
    // unsubscribe is called when the header component is umounted.
    return ()=> unSubscribe();

  });
},[]);


  return (
    <div className='pl-4 absolute w-screen bg-gradient-to-b from-black z-30 flex justify-between items-center'>
      <img className='w-44' src={LOG_URL} alt='log'/>

      {user && 
      (<div className='flex mr-2 space-x-4'>
        {langTranslateShow && <select className='p-2 m-2 bg-gray-600 text-white' onChange={handleChangeLanguage}>
          {SUPPORTED_LANGUAGE.map((lang)=>{
            return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          })}
        </select>}
        <button className='py-2 px-4 m-2  bg-purple-800 rounded-md text-white' onClick={handleGptSearchClick}>{langTranslateShow ? "Browse Movies" : "GPT-SEARCH"}</button>
        <img className='w-10 h-10' src={user?.photoURL} alt='userIcon'/>
        <button className='font-bold text-red-700 text-lg' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
