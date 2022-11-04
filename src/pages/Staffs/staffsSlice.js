import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {URL} from '../../utils/url'

const staffsSlice = createSlice({
    name:'staffs',
    initialState: {isLoading: true,
        staffs: [],
    errMess: null},
    reducers: {
        // Tuong ung voi bao switch case cua redux core
        getStaffs: (state, action) => {
            state.staffs.push({id: 3, name:'Duyen', position:'Sales'})
        },
        postStaff: (state, action) => {},
        patchStaff: (state, action) => {},
        deleteStaff: (state, action) => {},
    },
    extraReducers: builder => {
        builder
            .addCase(fetchStaffs.pending, (state, action) => {
                state.isLoading = true
                state.errMess = null
                state.staffs = []
            })
            .addCase(fetchStaffs.fulfilled, (state, action) => {
                state.isLoading = false
                state.errMess = null
                state.staffs = action.payload
            })
            .addCase(fetchStaffs.rejected, (state, action) => {
                state.errMess = action
                state.isLoading = false
                state.staffs = []
                
            })
    }
})


export const fetchStaffs = createAsyncThunk('staffs/fetch', async() => {
    const data = await fetch(`${URL}staffs`)
    const staffs = await data.json()
    
    return staffs
})


export default staffsSlice