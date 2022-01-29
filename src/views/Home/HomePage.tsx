import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { ShopsChangeNotificationTable } from './components/ShopsChangeNotificationTable';
import { getShopsChangeNotifications } from './HomePageStore';
import LinearProgress from '@mui/material/LinearProgress';

export const HomePage = () => {
   const networkId: number | undefined = useSelector((s: RootState) => s.networkAdmin.currentNetwork?.id);
   const loading: boolean = useSelector((s: RootState) => s.home.loading);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getShopsChangeNotifications(networkId || 5))
   }, [dispatch, networkId])
   return (
      <Box>
         <Typography variant='h6'>
            Shops Change Notifications
         </Typography>
         {loading ? <LinearProgress /> : null}
         <ShopsChangeNotificationTable />
      </Box>
   )
}
