import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import dayjs from 'dayjs'
import ShopsChangeNotificationDetail from './ShopsChangeNotificationDetail';


export const ShopsChangeNotificationTable: FC = ()  => {
   const notifications: IShopsChangeNotification[] = useSelector(
      (s: RootState) => s.home.shopsChangeNotifications
   );

   const [openModal, setOpenModal] = useState<boolean>(false);
   const [notification, setNotification] = useState<IShopsChangeNotification>(notifications[0]);

   const handleClick = (notification: IShopsChangeNotification) => {
      setOpenModal(!openModal);
      setNotification(notification);
   };

   return (
      <Box>
         <TableContainer component={Paper}>
            <Table size='small' stickyHeader>
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
                        <TableCell sx={{cursor:'pointer'}} onClick={() => handleClick(notification)}>{notification.cid}</TableCell>
                        <TableCell>{notification.description}</TableCell>
                        <TableCell>{notification.status}</TableCell>
                        <TableCell>{dayjs(notification.shopsUpdatedOn).format("MM/DD/YYYY HH:MM:ss")}</TableCell>
                        <TableCell>{notification.schedulePeriods.length}</TableCell>
                        <TableCell>{notification.shopsChangeNotifications.length}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
            {
               openModal ? <ShopsChangeNotificationDetail open={openModal} shopsChangeNotification={notification} /> : null
            }
         </TableContainer>
      </Box>
   )
};


