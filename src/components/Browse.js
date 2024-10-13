import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpComingMovie from '../hooks/useUpComingMovie';


const Browse = () => {

  useNowPlayingMovies();// custom hook for fetch the api data and storing in redux-store (movieSlice);

  usePopularMovie();// custom hook for fetch the api data and storing in redux-store (movieSlice);

  useTopRatedMovie();// custom hook for fetch the api data and storing in redux-store (movieSlice);

  useUpComingMovie();// custom hook for fetch the api data and storing in redux-store (movieSlice);
  
  return (
    <div className='bg-stone-950'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
