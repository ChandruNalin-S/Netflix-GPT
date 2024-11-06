import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovie } from "../utils/moviesSlice";



const useTopRatedMovie = ()=>{
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store)=>store.movies.TopRatedMovie);

  const getTopRatedList = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
    
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovie(json.results));
  }


  useEffect(()=>{
    !topRatedMovies && getTopRatedList();
  },[]);
}


export default useTopRatedMovie;