import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './features/countrySlice'
import sectorSlice from './features/sectorSlice'
import subsectorSlice from './features/subsectorSlice'

export const store = configureStore({
  reducer: {
   country : countrySlice,
   sector : sectorSlice,
   subsector : subsectorSlice
  },
}) 