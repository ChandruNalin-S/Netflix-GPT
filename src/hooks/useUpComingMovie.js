import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovie } from "../utils/moviesSlice";



const useUpComingMovie = () => {
  const dispatch = useDispatch();


  const upComingMovies = useSelector((store)=> store.movies.UpcomingMovie);

  const getTopRatedList = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
    
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpComingMovie(json.results));
  }


  useEffect(()=>{
    !upComingMovies && getTopRatedList();
  },[]);
}

export default useUpComingMovie;
