import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

export const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    <div className='text-white bg-stone-950'>
      <div className='-mt-64 relative z-30 pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"Popular"} movies={movies.PopularMovie}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovie}/>
      <MovieList title={"Up Coming"} movies={movies.UpcomingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;
