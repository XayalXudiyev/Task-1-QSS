import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 4

import axios from 'axios';

const initialState = {
    subsectors: [],
    isLoading: false,
    error: null,
}

export const fetchSubsector = createAsyncThunk('subsector', async () => {
    try {
        const res = await axios.get(`https://searchartback-production-dc78.up.railway.app/api/subsectors/?sector=${Index}`);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
});

export const subsectorSlice = createSlice({
    name: 'subsector',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSubsector.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchSubsector.fulfilled, (state, action) => {
            state.isLoading = false
            state.subsectors = action.payload
        })
        builder.addCase(fetchSubsector.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default subsectorSlice.reducer