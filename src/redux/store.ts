// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import appDataReducer from './slicer/appDataSlice'

export const store = configureStore({
  reducer: {
    appData: appDataReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch