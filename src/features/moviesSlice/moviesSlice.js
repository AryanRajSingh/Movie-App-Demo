import { createSlice } from '@reduxjs/toolkit';

const initialState = { movies: {} };

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;

/**
 ** payload action'dan geliyor o yüzden destructure debiliyoruz.
 */
