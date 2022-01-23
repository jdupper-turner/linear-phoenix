import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FormControl, Grid, TextField } from '@mui/material';


const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement;
   },
   ref: React.Ref<unknown>,
) {
   return <Slide direction="up" ref={ref} {...props} />;
});

export interface INetworkAdminEdit {
   open: boolean
   network: INetwork | null
}

export default function NetworkAdminEdit(props: INetworkAdminEdit) {
   const [open, setOpen] = React.useState(props.open || false);
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
                     {props.network?.networkCode} - {props.network?.description}
                  </Typography>

                  <Button autoFocus color="inherit" onClick={handleClose}>
                     Save
                  </Button>
               </Toolbar>
            </AppBar>
            {props.network ? <EditNetworkForm network={props.network} /> : null}
         </Dialog>
      </div>
   );
};


interface IEditNetworkForm {
   network: INetwork | null
}

const EditNetworkForm = (props: IEditNetworkForm) => {
   return (
      <Grid sx={{ mt: 1, ml: 1 }} container spacing={2}>

         <Grid item xs={3}>
            <FormControl fullWidth>
               <TextField
                  required
                  size='small'
                  label='Network Code'
                  value={props.network?.networkCode} />
            </FormControl>
         </Grid>

         <Grid item xs={3}>
            <FormControl fullWidth>
               <TextField
                  required
                  size='small'
                  label='Description'
                  value={props.network?.description} />
            </FormControl>
         </Grid>

         <Grid item xs={12}>

         </Grid>

      </Grid>
   )
}