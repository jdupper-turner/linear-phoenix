import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { getAllNetworks } from './NetworkAdminStore';
import { Typography } from '@mui/material';
import NetworkAdminTabContainer from './components/NetworkAdminTabContainer';
import CircularProgress from '@mui/material/CircularProgress';


export const NetworkAdminPage: FC = () => {
   const dispatch = useDispatch();
   const loading = useSelector((state: RootState) => state.networkAdmin.loading);
   const network = useSelector((state: RootState) => state.networkAdmin.currentNetwork);
   
   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch])

   return (
      <div>
         <Typography variant='h6'>
            {network?.description}
            {loading ? <CircularProgress /> : null}
         </Typography>
         <NetworkAdminTabContainer />
      </div>
   )
};