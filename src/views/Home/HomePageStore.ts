import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetShopsChangeNotificationsApi } from './HomePageAPI';

const initialState: IHomePageState = {
   loading: false,
   shopsChangeNotifications: []
};

export const homePageSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getShopsChangeNotifications.pending, (state: IHomePageState) => {
            state.loading = true;
         })
         .addCase(getShopsChangeNotifications.fulfilled, (state: IHomePageState, action: any) => {
            const { notifications } = action.payload;
            state.shopsChangeNotifications = notifications;
            state.loading = false;
         })
   }
});

export const getShopsChangeNotifications = createAsyncThunk(
   'home/getShopsChangeNotifications',
   async (networkId: number) => {
      return await GetShopsChangeNotificationsApi(networkId);
   }
);

export default homePageSlice.reducer;