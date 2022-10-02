import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../commmon/apis/MovieApi';
import { APIKey } from '../../commmon/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const seriesText = 'Harry';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=movie`
    );
    const data = await response.data;
    return data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'Friends';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=series`
    );
    const data = await response.data;
    return data;
  }
);

const initialState = { movies: {}, shows: {} };

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
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = moviesSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;

/**
 ** payload action'dan geliyor o yüzden destructure debiliyoruz.
 */
