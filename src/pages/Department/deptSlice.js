import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {URL} from '../../utils/url'

const deptSlice = createSlice({
    name:'dept',
    initialState: {
        isLoading: true,
        depts: [],
        errMess: null
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
    }
})


export const fetchDepts = createAsyncThunk('depts/fetch', async() => {
    const data = await fetch(`${URL}departments`)
    const depts = await data.json()
    return depts
})


export default deptSlice