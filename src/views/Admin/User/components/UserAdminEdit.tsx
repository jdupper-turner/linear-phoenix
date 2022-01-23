import { FC, forwardRef, useState } from 'react';
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
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
         </Dialog>
      </div>
   );
};