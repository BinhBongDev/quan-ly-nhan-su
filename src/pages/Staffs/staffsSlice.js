import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {URL} from '../../utils/url'

const staffsSlice = createSlice({
    name:'staffs',
    initialState: {
        isLoading: true,
        staffs: [],
        errMess: null
    },
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
            .addCase(postStaff.fulfilled, (state, action) => {
                state.staffs = action.payload
            })
            .addCase(deleteStaff.fulfilled, (state, action) => {
                state.staffs = action.payload
            })
            .addCase(editStaff.fulfilled, (state, action) => {
                state.staffs = action.payload
            })
    }
})


export const fetchStaffs = createAsyncThunk('staffs/fetch', async() => {
    const data = await fetch(`${URL}staffs`)
    const staffs = await data.json()
    return staffs
})

export const postStaff = createAsyncThunk('staff/post', async(staff) => {
    const data = await fetch(`${URL}staffs`, {
        method: 'POST',
        body: JSON.stringify(staff),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const takeStaff = await data.json()
    return takeStaff
})

export const editStaff = createAsyncThunk('staff/patch', async(staffEdit) => {
    const data = await fetch(`${URL}staffs`, {
        method: "PATCH",
        body: JSON.stringify(staffEdit),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const editStaff = await data.json()
    return editStaff
})

export const deleteStaff = createAsyncThunk('staff/delete', async(idStaff) => {
    const data = await fetch(`${URL}staffs/${idStaff}`, {
        method: 'DELETE'
    })
    const staff = await data.json()
    return staff
})


export default staffsSlice