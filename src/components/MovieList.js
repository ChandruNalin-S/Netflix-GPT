import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const {title,movies} = props;
  console.log(movies);
  if(!movies) return;

  return (
    <div className='p-6'>
      <h1 className='font-semibold text-2xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies.map((movie)=>{
            return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieList
