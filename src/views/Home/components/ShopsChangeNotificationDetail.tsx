import { AppBar, Button, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';

const Transition = forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement;
   },
   ref: React.Ref<unknown>,
) {
   return <Slide direction="up" ref={ref} {...props} />;
});



export interface IShopsChangeNotificationDetailProps {
   open: boolean
   shopsChangeNotification: IShopsChangeNotification
}

export default function ShopsChangeNotificationDetail(props: IShopsChangeNotificationDetailProps) {
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
                     {props.shopsChangeNotification.cid} - {props.shopsChangeNotification.description}
                  </Typography>

                  <Button autoFocus color="inherit" onClick={handleClose}>
                     Save
                  </Button>
               </Toolbar>
            </AppBar>

            <Grid container spacing={3}>
               <Grid item>
                  <Typography>
                     <strong>Shops Changed On:</strong>
                  </Typography>
                  {dayjs(props.shopsChangeNotification.shopsUpdatedOn).format("MM/DD/YYYY HH:MM:ss")}
               </Grid>
               <Grid item>
                  <Typography>
                     <strong>Sync Status:</strong>
                  </Typography>
                  {props.shopsChangeNotification.status}
               </Grid>
            </Grid>

         </Dialog>
      </div>
   );
};