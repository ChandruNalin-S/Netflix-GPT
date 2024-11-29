import React from 'react'


const VideoTitle = (props) => {

  const {title,overview} = props

  return (
    <div className='pt-[18%] px-12 md:px-24 w-screen aspect-video absolute bg-gradient-to-r from-black text-white '>
      <h1 className='font-bold text-2xl md:text-3xl'>{title}</h1>
      <p className=' py-4 hidden md:inline-block w-4/12'>{overview}</p>
      <div className='text-lg font-semibold space-x-3 mt-5 md:mt-0'>
        <button className='px-5 md:px-10 py-4  bg-white text-black rounded-md md:hover:opacity-85'>Play</button>
        <button className='p-7 md:px-12 py-4 bg-gray-400 rounded-md bg-opacity-10 md:hover:opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
