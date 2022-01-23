import { FC, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { UserAdminEdit } from './UserAdminEdit';


export const UserAdminTable: FC = () => {
   const users: IUser[] = useSelector((state: RootState) =>
      state.userAdmin.users
   );

   const [openModal, setOpenModal] = useState<boolean>(false);
   const [user, setUser] = useState<IUser | null>(null);

   const handleClick = (userName: string) => {
      const user = users.filter(u => u.userName === userName)[0];
      setUser(user);
      setOpenModal(!openModal)
   };

   const deleteUser = (userName: string) => {
      console.log(`delete ${userName} triggered.`);
   };

   return (
      <Box>
         <Table size='small'>
            <TableHead>
               <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell></TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {users.map((user: IUser, index: number) => (
                  <TableRow key={index} onClick={() => handleClick(user.userName)}>
                     <TableCell>
                        {user.userName}
                     </TableCell>
                     <TableCell>
                        {user.emailAddress}
                     </TableCell>
                     <TableCell onClick={() => deleteUser(user.userName)}>
                        <DeleteOutlineIcon />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         {openModal ? <UserAdminEdit open={openModal} user={user} /> : null}
      </Box>
   )
};