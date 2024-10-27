import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpComingMovie from '../hooks/useUpComingMovie';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';


const Browse = () => {

  const showGptSearch = useSelector((store)=>store?.gpt?.showGptSearch);


  useNowPlayingMovies();// custom hook for fetch the api data and storing in redux-store (movieSlice);

  usePopularMovie();// custom hook for fetch the api data and storing in redux-store (movieSlice);

  useTopRatedMovie();// custom hook for fetch the api data and storing in redux-store (movieSlice);

  useUpComingMovie();// custom hook for fetch the api data and storing in redux-store (movieSlice);
  
  return (
    <div className=''>
      <Header/>
      {
        showGptSearch ? (<GptSearchPage/>) :
        (<>{/* <></> this is called react fragment to combine two or more component inside one */}
          <MainContainer/>
          <SecondaryContainer/>
        </>)
      }
    </div>
  )
}

export default Browse
