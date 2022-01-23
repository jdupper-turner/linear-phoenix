import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { getAllNetworks } from './NetworkAdminStore';
import { NetworkAdminTable } from './components/NetworkAdminTable';


export const NetworkAdminPage: FC = () => {
   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch])

   const loading = useSelector((state: RootState) => state.networkAdmin.loading);
   
   return (
      <div>
         <h3>Network Admin. Page</h3>
         <h4>{loading ? 'Loading' : ''}</h4>
         <NetworkAdminTable />
      </div>
   )
};