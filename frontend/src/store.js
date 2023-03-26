import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
// import userReducer from './features/profile/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer
})