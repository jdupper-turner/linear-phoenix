import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetUserActivityApi, GetUserActivityRequest, GetUserActivityTypeApi } from './UserActivityAPI';

const initialState: IUserActivityState = {
   loading: false,
   userActivity: [],
   userActivityById: {},
   userActivityTypes: [],
   userActivityTypesById: {}
};

export const userActivitySlice = createSlice({
   name: 'userActivity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getUserActivity.pending, (state: IUserActivityState) => {
            state.loading = true;
         })
         .addCase(getUserActivity.fulfilled, (state: IUserActivityState, action: any) => {
            const { userActivity } = action.payload;
            state.userActivity = userActivity;
            state.userActivity.forEach(ua => { state.userActivityById[ua.id] = ua; });
            state.loading = false;
         })
         .addCase(getUserActivityTypes.pending, (state: IUserActivityState) => {
            state.loading = true;
         })
         .addCase(getUserActivityTypes.fulfilled, (state: IUserActivityState, action: any) => {
            const { userActivityTypes } = action.payload;
            state.userActivityTypes = userActivityTypes;
            state.userActivityTypes.forEach((t) => { state.userActivityTypesById[t.id] = t; });
            state.loading = false;
         })
   }
});



export const getUserActivity = createAsyncThunk(
   'userActivity/getUserActivity',
   async (payload: GetUserActivityRequest) => {
      return await GetUserActivityApi(payload);
   }
);

export const getUserActivityTypes = createAsyncThunk(
   'userActivity/getUserActivityTypes',
   async () => {
      return await GetUserActivityTypeApi();
   }
)


export default userActivitySlice.reducer;