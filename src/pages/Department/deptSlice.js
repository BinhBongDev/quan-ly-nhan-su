import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {URL} from '../../utils/url'

const deptSlice = createSlice({
    name:'dept',
    initialState: {
        isLoading: true,
        depts: [],
        errMess: null,
        dept: []
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDepts.pending, (state, action) => {
                state.isLoading = true
                state.errMess = null
                state.depts = []
            })
            .addCase(fetchDepts.fulfilled, (state, action) => {
                state.isLoading = false
                state.errMess = null
                state.depts = action.payload
            })
            .addCase(fetchDepts.rejected, (state, action) => {
                state.errMess = action
                state.isLoading = false
                state.depts = []
                
            })
            .addCase(fetchDept.pending, (state, action) => {
                state.isLoading = true
                state.errMess = null
                state.dept = []
            })
            .addCase(fetchDept.fulfilled, (state, action) => {
                state.isLoading = false
                state.errMess = null
                state.dept = action.payload
            })
            .addCase(fetchDept.rejected, (state, action) => {
                state.errMess = action
                state.isLoading = false
                state.dept = []
                
            })
            
    }
})


export const fetchDepts = createAsyncThunk('depts/fetch', async() => {
    const data = await fetch(`${URL}departments`)
    const depts = await data.json()
    return depts
})

export const fetchDept = createAsyncThunk("dept/fetch", async(deptId) => {
    const data = await fetch(`${URL}departments/${deptId}`)
    const dept = await data.json()
    
    return dept
})

export default deptSlice