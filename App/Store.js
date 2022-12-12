//import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './reducer/CounterReducer'
import userReducer  from './reducer/UserReducer'
import ConfigReducer from './reducer/ConfigReducer';
import { combineReducers } from 'redux';

// export default configureStore({
//   reducer: {
//     counter : counterReducer,
//     user:userReducer
//   },
// })

export default rootReducer = combineReducers({
  counter : counterReducer,
  user:userReducer,
  config:ConfigReducer
})