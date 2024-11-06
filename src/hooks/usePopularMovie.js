import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovie } from "../utils/moviesSlice";



const usePopularMovie = ()=>{
  const dispatch = useDispatch();

  const popularMovies = useSelector((store)=> store.movies.PopularMovie);

  const getPopularList = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
    
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovie(json.results));
  }


  useEffect(()=>{
    !popularMovies && getPopularList();
  },[]);
}


export default usePopularMovie;