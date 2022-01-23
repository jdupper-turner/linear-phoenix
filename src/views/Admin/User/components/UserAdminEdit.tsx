import { FC, forwardRef, useState } from 'react';
import { AppBar, Button, Dialog, FormControl, Grid, IconButton, Slide, TextField, Toolbar, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';


const Transition = forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement;
   },
   ref: React.Ref<unknown>,
) {
   return <Slide direction="up" ref={ref} {...props} />;
});


export interface IUserAdminEdit {
   open: boolean
   user: IUser | null
}

export const UserAdminEdit: FC<IUserAdminEdit> = (props: IUserAdminEdit) => {
   const [open, setOpen] = useState(props.open || false);
   const handleClose = () => setOpen(false);

   return (
      <div>
         <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
               <Toolbar>
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                     <CloseIcon />
                  </IconButton>

                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                     {props.user?.userName}
                  </Typography>

                  <Button autoFocus color="inherit" onClick={handleClose}>
                     Save
                  </Button>
               </Toolbar>
            </AppBar>
            {props.user ? <EditUserForm user={props.user} /> : null}
         </Dialog>
      </div>
   );
};


interface IEditUserForm {
   user: IUser
}

const EditUserForm: FC<IEditUserForm> = (props: IEditUserForm) => {
   return (
      <Grid sx={{ mt: 1, ml: 1 }} container spacing={2}>

         <Grid item xs={3}>
            <FormControl fullWidth>
               <TextField
                  required
                  size='small'
                  label='User Name'
                  value={props.user.userName} />
            </FormControl>
         </Grid>

         <Grid item xs={3}>
            <FormControl fullWidth>
               <TextField
                  required
                  size='small'
                  label='Email Address'
                  value={props.user.emailAddress} />
            </FormControl>
         </Grid>

         <Grid item xs={12}>

         </Grid>

      </Grid>
   )
};