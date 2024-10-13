import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovie } from "../utils/moviesSlice";



const usePopularMovie = ()=>{
  const dispatch = useDispatch();

  const getPopularList = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
    
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovie(json.results));
  }


  useEffect(()=>{
    getPopularList();
  },[]);
}


export default usePopularMovie;