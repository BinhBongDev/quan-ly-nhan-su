import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {URL} from '../../utils/url'

const salarySlice = createSlice({
    name:'salary',
    initialState: {
        isLoading: true,
        salary: [],
        errMess: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSalary.pending, (state, action) => {
                state.isLoading = true
                state.errMess = null
                state.salary = []
            })
            .addCase(fetchSalary.fulfilled, (state, action) => {
                state.isLoading = false
                state.errMess = null
                state.salary = action.payload
            })
            .addCase(fetchSalary.rejected, (state, action) => {
                state.errMess = action
                state.isLoading = false
                state.salary = []
                
            })
    }
})


export const fetchSalary = createAsyncThunk('salary/fetch', async() => {
    const data = await fetch(`${URL}staffsSalary`)
    const salary = await data.json()
    return salary
})


export default salarySlice