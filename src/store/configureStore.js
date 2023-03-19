import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './whetherRedux';

const rootReducer = combineReducers({
  weatherReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
