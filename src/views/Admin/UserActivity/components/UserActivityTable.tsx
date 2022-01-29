import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import dayjs from 'dayjs';

export const UserActivityTable: FC = () => {
   const userActivity: IUserActivity[] = useSelector((s: RootState) => s.userActivity.userActivity);
   const userActivityTypesById = useSelector((s: RootState) => s.userActivity.userActivityTypesById);

   return (
      <Box>
         <TableContainer component={Paper}>
            <Table size='small'>
               <TableHead>
                  <TableRow>
                     <TableCell>Change Timestamp</TableCell>
                     <TableCell>Activity</TableCell>
                     <TableCell>Change</TableCell>
                     <TableCell>Activity Start</TableCell>
                     <TableCell>Status</TableCell>
                     <TableCell>Initiated By</TableCell>
                  </TableRow>
               </TableHead>

               <TableBody>
                  {userActivity.map((activity: IUserActivity, index: number) => (
                     <TableRow key={index}>
                        <TableCell>{dayjs(activity.changedOn).format("MM/DD/YYYY HH:MM:ss")}</TableCell>
                        <TableCell>{userActivityTypesById[activity.userActivityTypeId].name}</TableCell>
                        <TableCell>{activity.change}</TableCell>
                        <TableCell>{dayjs(activity?.startDate).format("MM/DD/YYYY")}</TableCell>
                        <TableCell>{activity.status}</TableCell>
                        <TableCell>{activity.changedBy}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   );
};