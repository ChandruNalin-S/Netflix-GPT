import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from './GptSearchSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div className='text-white'>
      <div className='absolute -z-10'>
        <img src={BG_URL} alt='netflix-background'/>
      </div>
      <GptSearchBar/>
      <GptSearchSuggestions/>
    </div>
  )
}

export default GptSearchPage;
