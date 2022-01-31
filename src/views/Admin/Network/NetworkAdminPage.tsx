import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { getAllNetworks } from './NetworkAdminStore';
import { Grid } from '@mui/material';
import NetworkAdminTabContainer from './components/NetworkAdminTabContainer';
import LinearProgress from '@mui/material/LinearProgress';


export const NetworkAdminPage: FC = () => {
   const loading: boolean = useSelector((s: RootState) => s.networkAdmin.loading);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch])

   return (
      <Grid container>
         <Grid item xs={12}>
            {loading ? <LinearProgress /> : null}
         </Grid>
         <NetworkAdminTabContainer />
      </Grid>
   )
};
