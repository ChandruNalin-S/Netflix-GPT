import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from './GptSearchSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <>
      <div className='absolute -z-10'>
        <img className='h-screen object-cover md:w-screen' src={BG_URL} alt='netflix-background'/>
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptSearchSuggestions/>
      </div>
    </>
  )
}

export default GptSearchPage;
