// src/features/appDataSlice.ts
import { getAppData } from '@/api/app/app'
import { IApp } from '@/types/app'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface AppDataState {
  data: Partial<IApp>
  loading: boolean
  error: string | null
}

const initialState: AppDataState = {
  data: {},
  loading: false,
  error: null
}

export const fetchAppData = createAsyncThunk('appData/fetchAppData', getAppData)

const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAppData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchAppData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch data'
      })
  }
})

export default appDataSlice.reducer
