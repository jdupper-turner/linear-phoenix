import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetSchedulePeriodById } from './SchedulePeriodAPI';

const initialState: ISchedulePeriodState = {
   loading: false,
   schedulePeriod: null
}

export const schedulePeriodSlice = createSlice({
   name: 'schedulePeriod',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getSchedulePeriodById.pending, (state) => {
            state.loading = true;
         })
         .addCase(getSchedulePeriodById.fulfilled, (state, action) => {
            state.schedulePeriod = action.payload as ISchedulePeriod
            state.loading = false;
         })
   }
});

export const getSchedulePeriodById = createAsyncThunk(
   'schedulePeriod/getSchedulePeriodById',
   async (spId: number) => {
      return await GetSchedulePeriodById(spId)
   }
);

export default schedulePeriodSlice.reducer;