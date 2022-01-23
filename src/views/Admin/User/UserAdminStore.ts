import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sortArrayByProperty } from "../../../utils/objectUtils";
import { GetAllUsersApi } from "./UserAPI";

const initialState: IUserAdminState = {
   loading: false,
   users: [],
   usersById: {},
   currentUser: null
}

export const userAdminSlice = createSlice({
   name: 'userAdmin',
   initialState,
   reducers: {
      setLoadingTo: (state: IUserAdminState, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getAllUsers.pending, (state: IUserAdminState) => {
            state.loading = true;
         })
         .addCase(getAllUsers.fulfilled, (state: IUserAdminState, action: any) => {
            const users = sortArrayByProperty(action.payload.users, 'userName');
            state.users = users;
            state.users.forEach(u => { state.users[u.id] = u; });
            state.loading = false;
         })
   }
})

export const getAllUsers = createAsyncThunk(
   'userAdmin/getAllUsers',
   async () => {
      return await GetAllUsersApi();
   }
)

export const { setLoadingTo } = userAdminSlice.actions;
export default userAdminSlice.reducer;