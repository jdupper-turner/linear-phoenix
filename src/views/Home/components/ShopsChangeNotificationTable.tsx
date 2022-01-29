import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import dayjs from 'dayjs'


export const ShopsChangeNotificationTable: FC = ()  => {
   const notifications: IShopsChangeNotification[] = useSelector(
      (s: RootState) => s.home.shopsChangeNotifications
   );

   return (
      <Box>
         <TableContainer component={Paper}>
            <Table size='small'>
               <TableHead>
                  <TableRow>
                     <TableCell>CID</TableCell>
                     <TableCell>Description</TableCell>
                     <TableCell>Status</TableCell>
                     <TableCell>Shops Changed On</TableCell>
                     <TableCell>Schedule Periods</TableCell>
                     <TableCell>Changes</TableCell>
                  </TableRow>
               </TableHead>

               <TableBody>
                  {notifications.map((notification: IShopsChangeNotification, index: number) => (
                     <TableRow key={index}>
                        <TableCell>{notification.cid}</TableCell>
                        <TableCell>{notification.description}</TableCell>
                        <TableCell>{notification.status}</TableCell>
                        <TableCell>{dayjs(notification.shopsUpdatedOn).format("MM/DD/YYYY HH:MM:ss")}</TableCell>
                        <TableCell>{notification.schedulePeriods.length}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   )
};