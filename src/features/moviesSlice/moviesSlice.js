import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../commmon/apis/MovieApi';
import { APIKey } from '../../commmon/apis/MovieApiKey';

const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Harry';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    const data = await response.data;
    return data;
  }
);

const initialState = { movies: {} };

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
  },
});

export const { addMovies } = moviesSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;

/**
 ** payload action'dan geliyor o yüzden destructure debiliyoruz.
 */
