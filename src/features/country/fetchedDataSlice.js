// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//     data: [],

// };

// export const fetchUserInfo = createAsyncThunk("fetchUserInfo", async () => {

//     try {
//         const res = await axios.get("https://searchartback-production-dc78.up.railway.app/api/country/?indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars")
//         return res.data
//     }
//     catch (err) {
//         console.log(err)
//     }
// })





// export const fetchedDataSlice = createSlice({
//     name: 'country',
//     initialState,
//     reducers: {
//         fetchCountryReducer: (state, action) => {
//             state.value = action.payload;
//         },
//         fetchedSectorReducer: (state, action) => {
//             state.value = action.payload;
//         },
//         fetchedSubSectorReducer: (state, action) => {
//             state.value = action.payload;
//         },
//         fetchedIndigatorReducer: (state, action) => {
//             state.value = action.payload;
//         },
//     },
// });

// export const { fetchCountryReducer, fetchedSectorReducer, fetchedSubSectorReducer, fetchedIndigatorReducer } = countrySlice.actions;
// export default fetchedDataSlice.reducer;