import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import studentDataReducer from "./redux/finalDataSlice"
const reducer = combineReducers({
  studentData : studentDataReducer,
})
const store = configureStore({
  reducer,
})
export default store;