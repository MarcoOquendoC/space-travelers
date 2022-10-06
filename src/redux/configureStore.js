import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';
import { dragonsReducer } from './dragons';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
    dragons: dragonsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
