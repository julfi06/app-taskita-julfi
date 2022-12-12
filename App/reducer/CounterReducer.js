import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    nama:"",
    email:""
  },
  reducers: {
    setNama: (state, action)=>{
        state.nama = action.payload
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setNama, increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer