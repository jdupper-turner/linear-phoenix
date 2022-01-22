import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navigationReducer from '../views/Navigation/NavigationStore';
import schedulePeriodReducer from '../views/SchedulePeriod/SchedulePeriodStore';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    schedulePeriod: schedulePeriodReducer
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
