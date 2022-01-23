import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { getAllNetworks, setCurrentNetwork } from './NetworkAdminStore';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import NetworkAdminTabContainer from './components/NetworkAdminTabContainer';
import CircularProgress from '@mui/material/CircularProgress';


export const NetworkAdminPage: FC = () => {
   const dispatch = useDispatch();

   const loading: boolean = useSelector((state: RootState) => state.networkAdmin.loading);
   const network: INetwork | null = useSelector((state: RootState) => state.networkAdmin.currentNetwork);
   const allNetworks: INetwork[] = useSelector((state: RootState) => state.networkAdmin.networks);
   const [networkCode, setNetworkCode] = useState<string>(network?.networkCode || '');

   const onChangeNetwork = (network: INetwork) => {
      setNetworkCode(network.networkCode);
      dispatch(setCurrentNetwork(network));
   };

   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch])

   return (
      <Grid container>
         <Grid item>
            <Typography variant='h6'>
               {network?.networkCode}
               {loading ? <CircularProgress /> : null}
            </Typography>
         </Grid>

         <Grid item xs={1}>
            <FormControl fullWidth>
               <InputLabel id='network-label'>Network</InputLabel>
               <Select
                  size='small'
                  value={networkCode}
                  label='Network'
                  labelId='network-label'>
                  {allNetworks.map((network: INetwork, index: number) => (
                     <MenuItem key={index} onClick={() => onChangeNetwork(network)}>
                        {network.networkCode}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         </Grid>

         <NetworkAdminTabContainer />
      </Grid>
   )
};