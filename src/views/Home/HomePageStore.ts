import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetShopsChangeNotificationsApi } from './HomePageAPI';

const initialState: IHomePageState = {
   loading: false,
   statusMessage: "",
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
         .addCase(getShopsChangeNotifications.rejected, (state: IHomePageState, action: any) => {
            state.loading = false;
            state.statusMessage = action.error.name + ': ' + action.error.message;
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