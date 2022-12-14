//import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './reducer/CounterReducer'
import userReducer  from './reducer/UserReducer'
import ConfigReducer from './reducer/ConfigReducer';
import taskReducer from './reducer/TaskReducer'
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
  config:ConfigReducer,
  task:taskReducer
})