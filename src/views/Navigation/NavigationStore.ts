import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const PLANNING_OPTIONS: NavigationPlanning[] = [
   'Last Promo Planning',
   'Last Graphic Planning'
];

export const REPORT_OPTIONS: NavigationReports[] = [
   'As Run',
   'Detailed Media Group',
   'Executive Media Group',
   'Inventory Summary'
];

export const ADMIN_OPTIONS: NavigationAdmin[] = [
   'Planning',
   'Mapping',
   'Network',
   'User Activity',
   'User',
   'Activity Logs'
]

const initialState: INavigationState = {
   currentPage: 'Home'
};

const navigationSlice = createSlice({
   name: 'navigation',
   initialState,
   reducers: {
      setCurrentPage: (state: INavigationState, action: PayloadAction<CurrentPage>) => {
         state.currentPage = action.payload;
      },
      setDropdownOption: (_state: INavigationState, action: PayloadAction<string>) => {
         console.log(action.payload)
      }
   },
   extraReducers: (builder) => {}
});

export const { setCurrentPage, setDropdownOption } = navigationSlice.actions;
export default navigationSlice.reducer;