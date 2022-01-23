import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { getAllNetworks, setCurrentNetwork } from './NetworkAdminStore';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import NetworkAdminTabContainer from './components/NetworkAdminTabContainer';
import LinearProgress from '@mui/material/LinearProgress';


export const NetworkAdminPage: FC = () => {
   const dispatch = useDispatch();

   const loading: boolean = useSelector((s: RootState) => s.networkAdmin.loading);
   const network: INetwork | null = useSelector((s: RootState) => s.networkAdmin.currentNetwork);
   const allNetworks: INetwork[] = useSelector((s: RootState) => s.networkAdmin.networks);
   const [networkCode, setNetworkCode] = useState<string>(network?.networkCode || '');

   const handleChange = (event: SelectChangeEvent) => {
      setNetworkCode(event.target.value as string);
   };

   const onChangeNetwork = (network: INetwork) => {
      setNetworkCode(network.networkCode);
      dispatch(setCurrentNetwork(network));
   };

   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch])

   return (
      <Grid container>
         <Grid item xs={1}>
            <FormControl fullWidth>
               <InputLabel id='network-label'>
                  Network
               </InputLabel>
               <Select
                  size='small'
                  value={networkCode}
                  label='Network'
                  labelId='network-label'
                  onChange={handleChange}>
                  {allNetworks.map((network: INetwork, index: number) => (
                     <MenuItem
                        key={index}
                        value={network.networkCode}
                        onClick={() => onChangeNetwork(network)}>
                        {network.networkCode}
                     </MenuItem>
                  ))}
               </Select>
               {loading ? <LinearProgress /> : null}
            </FormControl>
         </Grid>

         <NetworkAdminTabContainer />
      </Grid>
   )
};
