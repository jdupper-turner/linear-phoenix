import { FC, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NetworkAdminEdit from './NetworkAdminEdit';


export const NetworkAdminTable: FC = () => {
   const networks = useSelector((state: RootState) => state.networkAdmin.networks);

   const [openModal, setOpenModal] = useState<boolean>(false);
   const [network, setNetwork] = useState<INetwork | null>(null);

   const handleClick = (networkCode: string) => {
      const network = networks.filter(n => n.networkCode === networkCode)[0];
      setNetwork(network);
      setOpenModal(!openModal)
   };

   const deleteNetwork = (networkCode: string) => {
      console.log(`delete ${networkCode} triggered.`);
   };

   return (
      <Box>
         <Table size='small'>
            <TableHead>
               <TableRow>
                  <TableCell>Network Code</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell></TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {networks.map((network: INetwork, index: number) => (
                  <TableRow key={index} onClick={() => handleClick(network.networkCode)}>
                     <TableCell>
                        {network.networkCode}
                     </TableCell>
                     <TableCell>
                        {network.description}
                     </TableCell>
                     <TableCell onClick={() => deleteNetwork(network.networkCode)}>
                        <DeleteOutlineIcon />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         {
            openModal ? <NetworkAdminEdit open={openModal} network={network} /> : null
         }
      </Box>
   )
};