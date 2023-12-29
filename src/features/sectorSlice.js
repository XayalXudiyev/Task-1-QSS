import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    sectors: [],
    isLoading: false,
    error: null,
}


export const fetchSectors = createAsyncThunk('sector', async () => {
    try {
        const res = await axios.get(`https://searchartback-production-dc78.up.railway.app/api/sectors/`);
      
        return res.data;

    } catch (err) {
        console.error(err); 
        throw err;
    }
});


export const sectorSlice = createSlice({
    name: 'sector',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSectors.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchSectors.fulfilled, (state, action) => {
            state.isLoading = false
            state.sectors = action.payload
        })
        builder.addCase(fetchSectors.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})


export default sectorSlice.reducer