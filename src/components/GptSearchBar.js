import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';

const GptSearchBar = () => {

  const language = useSelector((store)=>store.config.lang);

  const searchText = useRef();


  const handleGptSearchClick = async ()=>{

    const gptQuery ="Act as a movies recommended system for my query "+ searchText.current.value+"suggest me only 5 movies based on this with only title comma sperated like the example given ahead.Example result:kill,Goat,Vikram,Leo,Kathi";

    const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults) return console.log("error fetching");
    console.log(gptResults.choices);
  }


  return (
    <div className='flex justify-center pt-[10%]'>
      <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>

        <input ref={searchText} className='p-4 m-4 col-span-9 text-black' type="text" placeholder={lang[language].gptSearchPlaceholder}/>

        <button onClick={handleGptSearchClick} className='col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-md'>{lang[language].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar
