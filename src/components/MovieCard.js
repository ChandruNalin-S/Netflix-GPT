import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 pr-4'>
      <img className='rounded-sm' src={IMG_CDN_URL+posterPath} alt='MoviePoster'/>
    </div>
  )
}

export default MovieCard
