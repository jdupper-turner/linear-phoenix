import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { getAllNetworks } from './NetworkAdminStore';
import { List, ListItem, ListItemText } from '@mui/material';


export const NetworkAdminPage: FC = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch])

   const loading = useSelector((state: RootState) => state.networkAdmin.loading);
   const networks = useSelector((state: RootState) => state.networkAdmin.networks);
   return (
      <div>
         <h3>Network Admin. Page</h3>
         <h4>{loading ? 'Loading' : ''}</h4>
         <List>
            {networks.map((network, index) => (
               <ListItem>
                  <ListItemText>{network.networkCode}</ListItemText>
               </ListItem>
            ))}
         </List>
      </div>
   )
};