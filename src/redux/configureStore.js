import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';
import dragonsReducer from './dragons/dragons';

// root Reducer
const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
  dragons: dragonsReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;
