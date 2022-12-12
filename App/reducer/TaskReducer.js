import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name:"task",
    initialState:{
        summary:'',
        activedate:'',
        timestart:'',
        timeend:''
    },
    reducers:{
        setSummary: (state, action)=>{
            state.summary = action.payload
        },
        setActive: (state, action)=>{
            state.activedate = action.payload
        },
        setTimeStart: (state, action)=>{
            state.timestart = action.payload
        },
        setTimeEnd: (state, action)=>{
            state.timeend = action.payload
        },
    }
})

export const { setSummary, setActive, setTimeStart, setTimeEnd } = taskSlice.actions
export default taskSlice.reducer