import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    nowPlayingMovie:null,
    trailerVideo: null,
  },
  reducers:{
    addNowPlayingMovie:(state,action)=>{
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo  = action.payload;
    }
  }
});


export const {addNowPlayingMovie,addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;