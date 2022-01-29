import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeReducer from '../views/Home/HomePageStore';
import navigationReducer from '../views/Navigation/NavigationStore';
import networkAdminReducer from '../views/Admin/Network/NetworkAdminStore';
import schedulePeriodReducer from '../views/SchedulePeriod/SchedulePeriodStore';
import userActivityReducer from '../views/Admin/UserActivity/UserActivityStore';
import userAdminReducer from '../views/Admin/User/UserAdminStore';

export const store = configureStore({
   reducer: {
      home: homeReducer,
      navigation: navigationReducer,
      networkAdmin: networkAdminReducer,
      schedulePeriod: schedulePeriodReducer,
      userActivity: userActivityReducer,
      userAdmin: userAdminReducer
   }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
