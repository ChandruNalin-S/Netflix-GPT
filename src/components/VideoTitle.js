import React from 'react'


const VideoTitle = (props) => {

  const {title,overview} = props

  return (
    <div className='pt-[18%] px-24 w-screen aspect-video absolute bg-gradient-to-r from-black text-white'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className=' py-4 w-4/12'>{overview}</p>
      <div className='text-lg font-semibold space-x-3'>
        <button className='px-10 py-4 bg-white text-black rounded-md hover:opacity-85'>Play</button>
        <button className='px-12 py-4 bg-gray-400 rounded-md bg-opacity-10 hover:opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
