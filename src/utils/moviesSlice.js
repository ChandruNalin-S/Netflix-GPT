import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    nowPlayingMovie:null,
    PopularMovie:null,
    TopRatedMovie:null,
    UpcomingMovie:null,
    trailerVideo: null,
  },
  reducers:{
    addNowPlayingMovie:(state,action)=>{
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovie: (state,action)=>{
      state.PopularMovie = action.payload;
    },
    addTopRatedMovie: (state,action)=>{
      state.TopRatedMovie = action.payload;
    },
    addUpComingMovie:(state,action)=>{
      state.UpcomingMovie = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo  = action.payload;
    }
  }
});


export const {addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTopRatedMovie,addUpComingMovie} = moviesSlice.actions;

export default moviesSlice.reducer;