import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sortArrayByProperty } from "../../../utils/objectUtils";
import { GetDayPartsApi, GetMediaLengthsApi, GetNetworksApi } from "./NetworkAdminAPI";


const initialState: INetworkAdminState = {
   loading: false,

   networks: [],
   networksById: {},
   currentNetwork: null,
   editedNetwork: null,

   mediaLengths: [],
   mediaLengthsById: {},
   currentMediaLength: null,

   dayParts: [],
   dayPartsById: {},
   currentDayPart: null
};


export const networkAdminSlice = createSlice({
   name: 'networkAdmin',
   initialState,
   reducers: {
      setLoadingTo: (state: INetworkAdminState, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
      setCurrentNetwork: (state: INetworkAdminState, action: PayloadAction<INetwork>) => {
         state.currentNetwork = action.payload;
      },
      setNetworkToEdit(state: INetworkAdminState, action: PayloadAction<INetwork>) {
         state.editedNetwork = Object.assign({}, action.payload);
      },
      updateNetworkCodeProperty(state: INetworkAdminState, action: PayloadAction<string>) {
         if (state.editedNetwork)
            state.editedNetwork.networkCode = action.payload;
      },
      updateNetworkDescriptionProperty(state: INetworkAdminState, action: PayloadAction<string>) {
         if (state.editedNetwork)
            state.editedNetwork.description = action.payload;
      },
      updateUsePrimaryEventsAsPromos(state: INetworkAdminState, action: PayloadAction<boolean>) {
         if (state.editedNetwork)
            state.editedNetwork.primaryEventsAsPromos = action.payload;
      },
      updateUseCustomEventParameters(state: INetworkAdminState, action: PayloadAction<boolean>) {
         if (state.editedNetwork)
            state.editedNetwork.useCustomEventParameters = action.payload;
      },
      updateUseSplitAInventories(state: INetworkAdminState, action: PayloadAction<boolean>) {
         if (state.editedNetwork)
            state.editedNetwork.splitAInventories = action.payload;
      },
      updateMovePrimaryEventsToBreaks(state: INetworkAdminState, action: PayloadAction<boolean>) {
         if (state.editedNetwork)
            state.editedNetwork.movePrimaryEventsToBreaks = action.payload;
      },
      updateUseShopsChangeNotifications(state: INetworkAdminState, action: PayloadAction<boolean>) {
         if (state.editedNetwork)
            state.editedNetwork.shopsAssetChangeAppNotifications = action.payload;
      },
      updateEnablePallets(state: INetworkAdminState, action: PayloadAction<boolean>) {
         if (state.editedNetwork)
            state.editedNetwork.enablePallets = action.payload;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllNetworks.pending, (state: INetworkAdminState) => {
            state.loading = true;
         })
         .addCase(getAllNetworks.fulfilled, (state: INetworkAdminState, action: any) => {
            state.networks = sortArrayByProperty(action.payload.networks, 'networkCode');
            state.networks.forEach(ntwk => { state.networksById[ntwk.id] = ntwk; });
            state.currentNetwork = state.currentNetwork || state.networks[0];
            state.loading = false;
         })

         .addCase(getPromoMediaLengths.pending, (state: INetworkAdminState) => {
            state.loading = true;
         })
         .addCase(getPromoMediaLengths.fulfilled, (state: INetworkAdminState, action: any) => {
            state.mediaLengths = sortArrayByProperty(action.payload, 'length');
            state.mediaLengths.forEach(ml => { state.mediaLengthsById[ml.id] = ml; });
            state.currentMediaLength = state.currentMediaLength || null;
            state.loading = false;
         })

         .addCase(getNetworkDayParts.pending, (state: INetworkAdminState) => {
            state.loading = true;
         })
         .addCase(getNetworkDayParts.fulfilled, (state: INetworkAdminState, action: any) => {
            state.dayParts = sortArrayByProperty(action.payload.dayparts, 'startTime');
            state.dayParts.forEach(dp => { state.dayPartsById[dp.id] = dp; })
            state.currentDayPart = state.currentDayPart || null;
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

export const getPromoMediaLengths = createAsyncThunk(
   'networkAdmin/getPromoMediaLengths',
   async (networkId: number | null) => {
      if (!networkId) return;
      return await GetMediaLengthsApi(networkId);
   }
);

export const getNetworkDayParts = createAsyncThunk(
   'networkAdmin/getNetworkDayParts',
   async (networkId: number) => {
      return await GetDayPartsApi(networkId);
   }
);


export const {
   setLoadingTo,
   setCurrentNetwork,
   setNetworkToEdit,
   updateNetworkCodeProperty,
   updateNetworkDescriptionProperty,
   updateUsePrimaryEventsAsPromos,
   updateUseCustomEventParameters,
   updateUseSplitAInventories,
   updateMovePrimaryEventsToBreaks,
   updateUseShopsChangeNotifications,
   updateEnablePallets
} = networkAdminSlice.actions;
export default networkAdminSlice.reducer;