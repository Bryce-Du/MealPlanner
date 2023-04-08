import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
import pantryReducer from './features/pantry/pantrySlice'
import userReducer from './features/profile/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  pantry: pantryReducer
})

export const store = configureStore({
  reducer: rootReducer
})