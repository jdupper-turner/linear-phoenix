import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { setCurrentNetwork } from '../NetworkAdminStore';

export const NetworkPicker: FC = () => {
   const networks: INetwork[] = useSelector((s: RootState) => s.networkAdmin.networks);
   const network: INetwork | null = useSelector((s: RootState) => s.networkAdmin.currentNetwork);
   const [networkCode, setNetworkCode] = useState<string>(network?.networkCode || '');

   const onUIChange = (e: SelectChangeEvent) => {
      setNetworkCode(e.target.value);
   };

   const dispatch = useDispatch();
   const onNetworkChange = (network: INetwork) => {
      setNetworkCode(network.networkCode);
      dispatch(setCurrentNetwork(network));
   };

   return (
      <div style={{ display: 'inline' }}>
         <Select
            size='small'
            sx={{ minWidth: 100 }}
            value={networkCode}
            onChange={onUIChange}>
            {networks.map((network: INetwork, index: number) => (
               <MenuItem
                  key={index}
                  value={network.networkCode}
                  onClick={() => onNetworkChange(network)}>
                  {network.networkCode}
               </MenuItem>
            ))}
         </Select>
      </div>
   )
}