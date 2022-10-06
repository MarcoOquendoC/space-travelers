import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
