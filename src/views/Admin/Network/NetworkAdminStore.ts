import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GetNetworksApi } from "./NetworkAPI";

const initialState: INetworkAdminState = {
   loading: false,
   networks: [],
   networksById: {},
   currentNetwork: null
}

export const networkAdminSlice = createSlice({
   name: 'networkAdmin',
   initialState,
   reducers: {
      setLoadingTo: (state: INetworkAdminState, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      } 
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllNetworks.pending, (state: INetworkAdminState) => {
            state.loading = true;
         })
         .addCase(getAllNetworks.fulfilled, (state: INetworkAdminState, action: any) => {
            state.networks = action.payload.networks as INetwork[];
            state.networks.forEach(ntwk => { state.networksById[ntwk.id] = ntwk; })
            state.loading = false;
         })
   }
})

export const getAllNetworks = createAsyncThunk(
   'networkAdmin/getAllNetworks',
   async () => {
      return await GetNetworksApi();
   }
);

export const { setLoadingTo } = networkAdminSlice.actions;
export default networkAdminSlice.reducer;