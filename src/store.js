import { configureStore } from '@reduxjs/toolkit';
import indexReducers from './reducers';

export const store = configureStore({
  reducer: indexReducers,
})

export default store;