import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const counterUpdate = createAsyncThunk(
  'count/counterUpdate',
  async (value, thunkAPI) => {
    const response = await fetch('http://localhost:3000/api/counter');
    const data = await response.json();
    return data;
  }
);

const counterSlice = createSlice({
  name: 'Counter',
  initialState: {
    count: 0,
    isLoading: false,
    error: '',
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: {
    [counterUpdate.fulfilled]: (state, action) => {
      state.count += action.payload;
      state.isLoading = false;
    },
    [counterUpdate.pending]: (state) => {
      state.isLoading = true;
    },
    [counterUpdate.rejected]: (state) => {
      state.error = 'Error while loading data';
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
