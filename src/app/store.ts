import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navigationReducer from '../views/Navigation/NavigationStore';
import schedulePeriodReducer from '../views/SchedulePeriod/SchedulePeriodStore';
import networkAdminReducer from '../views/Admin/Network/NetworkAdminStore';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    schedulePeriod: schedulePeriodReducer,
    networkAdmin: networkAdminReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
