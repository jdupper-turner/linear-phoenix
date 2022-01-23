import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const PLANNING_OPTIONS: string[] = [
   'Last Promo Planning',
   'Last Graphic Planning'
];

export const REPORT_OPTIONS: string[] = [
   'As Run',
   'Detailed Media Group',
   'Executive Media Group',
   'Inventory Summary'
];

export const ADMIN_OPTIONS: string[] = [
   'Planning',
   'Mapping',
   'Network',
   'User Activity',
   'User',
   'Activity Logs'
]

const initialState: INavigationState = {
   currentPage: 'Home',
   currentDropdown: null
};

const navigationSlice = createSlice({
   name: 'navigation',
   initialState,
   reducers: {
      setCurrentPage: (state: INavigationState, action: PayloadAction<string>) => {
         state.currentPage = action.payload;
      },
      setDropdownOption: (state: INavigationState, action: PayloadAction<string>) => {
         state.currentDropdown = action.payload
      }
   },
   extraReducers: (builder) => {}
});

export const { setCurrentPage, setDropdownOption } = navigationSlice.actions;
export default navigationSlice.reducer;