import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        id:'',
        nama:'',
        email:''
    },
    reducers:{
        setId: (state, action)=>{
            state.id = action.payload
        },
        setNama: (state, action)=>{
            state.nama = action.payload
        },
        setEmail: (state, action)=>{
            state.email = action.payload
        },
        resetState:(state)=>{
            const INITIAL_DATA={
                id:'',
                nama:'',
                email:''
            }
            state = {...state,...INITIAL_DATA}
        }
    }
})

export const {setId, setNama, setEmail, resetState } = userSlice.actions
export default userSlice.reducer
