import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { getPromoMediaLengths } from '../NetworkAdminStore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const NetworkMediaLengthsTable: FC = () => {
   const dispatch = useDispatch();

   const network: INetwork | null = useSelector((state: RootState) =>
      state.networkAdmin.currentNetwork
   );

   const mediaLengths: IMediaLength[] = useSelector((state: RootState) =>
      state.networkAdmin.mediaLengths
   );


   useEffect(() => {
      dispatch(getPromoMediaLengths(network?.id || null))
   }, [dispatch, network?.id]);

   return (
      <Box>
         <Table size='small'>
            <TableHead>
               <TableRow>
                  <TableCell>Media Length</TableCell>
                  <TableCell>Exact Length Match</TableCell>
                  <TableCell></TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {mediaLengths.map((mediaLength: IMediaLength, index: number) => (
                  <TableRow key={index}>
                     <TableCell>
                        {mediaLength.length}
                     </TableCell>
                     <TableCell>
                        {mediaLength.exactLengthMatch.toString()}
                     </TableCell>
                     <TableCell>
                        <DeleteOutlineIcon />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </Box>
   );
};