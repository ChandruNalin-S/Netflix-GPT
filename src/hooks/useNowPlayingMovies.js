import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovie);

  const getNowPlayingMovieList = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  }


  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovieList();// this is called memoization, to don't call api again and again, when we have the api data stored in redux store.
  },[]);
}


export default useNowPlayingMovies;