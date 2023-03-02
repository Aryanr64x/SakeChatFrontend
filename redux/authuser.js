import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null
}



export const authUserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCreds: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
  
  },
})

export const { setCreds } = authUserSlice.actions

export default authUserSlice.reducer