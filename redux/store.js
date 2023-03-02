import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'
import authuser from './authuser'

export const store = configureStore({
  reducer: {
    counter,
    authuser
  },
})