import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch();

  const getNowPlayingMovieList = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  }


  useEffect(()=>{
    getNowPlayingMovieList();
  },[]);
}


export default useNowPlayingMovies;