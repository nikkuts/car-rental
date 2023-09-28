import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => 
    builder
    .addCase(fetchAdverts.pending, handlePending)
    .addCase(fetchAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchAdverts.rejected, handleRejected)
});

export const advertsReducer = advertsSlice.reducer;