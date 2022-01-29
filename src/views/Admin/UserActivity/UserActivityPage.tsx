import { Box, Grid } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { UserActivityTable } from './components/UserActivityTable';
import { GetUserActivityRequest } from './UserActivityAPI';
import { getUserActivity, getUserActivityTypes } from './UserActivityStore';

export const UserActivityPage: FC = () => {
   const dispatch = useDispatch();
   const networkId: number | undefined = useSelector((s: RootState) => s.networkAdmin.currentNetwork?.id)

   useEffect(() => {
      const payload: GetUserActivityRequest = {
         networkId: networkId || 1,
         change: "",
         userActivityTypeIds: []
      };

      dispatch(getUserActivity(payload));
      dispatch(getUserActivityTypes());
   }, [dispatch, networkId]);


   return (
      <Box>
         <Grid container>
            <Grid item xs={12}>
               User Activity Type Filters
            </Grid>

            <Grid item xs={12}>
               <UserActivityTable />
            </Grid>
         </Grid>
      </Box>
   );
};