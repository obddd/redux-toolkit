import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlicer';

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export default store;
