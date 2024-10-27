import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {

  const language = useSelector((store)=>store.config.lang);


  return (
    <div className='flex justify-center pt-[10%]'>
      <form className=' bg-black w-1/2 grid grid-cols-12'>
        <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[language].gptSearchPlaceholder}/>
        <button className='col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-md'>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
