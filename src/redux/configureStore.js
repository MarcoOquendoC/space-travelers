import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { dragonsReducer } from './dragons';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
