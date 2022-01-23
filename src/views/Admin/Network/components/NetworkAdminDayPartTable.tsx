import { FC, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getNetworkDayParts } from '../NetworkAdminStore';
import { RootState } from '../../../../app/store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { convertSecondsToHHMM } from '../../../../utils/timeUtils';


export const NetworkAdminDayPartsTable: FC = () => {
   const network = useSelector((s: RootState) => s.networkAdmin.currentNetwork);
   const dayParts = useSelector((s: RootState) => s.networkAdmin.dayParts);
   const dispatch = useDispatch();
   
   useEffect(() => {
      if (network) {
         dispatch(getNetworkDayParts(network?.id))
      }
   }, [dispatch, network]);

   const onDelete = (dayPart: IDayPart) => {
      console.log('please delete day part: ' + dayPart.name);
   }

   return (
      <Box>
         <Table size='small' stickyHeader>
            <TableHead>
               <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell></TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {dayParts.map((dayPart: IDayPart, index: number) => (
                  <TableRow key={index}>
                     <TableCell>
                        {dayPart.name}
                     </TableCell>
                     <TableCell>
                        {convertSecondsToHHMM(dayPart.startTime)}
                     </TableCell>
                     <TableCell>
                        {convertSecondsToHHMM(dayPart.endTime)}
                     </TableCell>
                     <TableCell>
                        <DeleteOutlineIcon onClick={() => onDelete(dayPart)} />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </Box>
   );
};