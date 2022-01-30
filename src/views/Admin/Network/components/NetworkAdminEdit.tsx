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
import { FormControl, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovePrimaryEventsToBreaks, updateNetworkCodeProperty, updateNetworkDescriptionProperty, updateUsePrimaryEventsAsPromos, updateUseSplitAInventories, updateUseCustomEventParameters, updateUseShopsChangeNotifications, updateEnablePallets } from '../NetworkAdminStore';
import { RootState } from '../../../../app/store';


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
   network: INetwork
}

const EditNetworkForm = (props: IEditNetworkForm) => {
   return (
      <Grid container sx={{ mt: 1, ml: 1 }} spacing={2}>
         <Grid item xs={3}>
            <NetworkCodeField />
         </Grid>

         <Grid item xs={3}>
            <NetworkDescriptionField />
         </Grid>

         <Grid item xs={6}>
            {/* whitespace */}
         </Grid>

         <Grid container sx={{ ml: 3 }}>
            <NetworkToggleOptions />
         </Grid>

      </Grid>
   )
};

const NetworkCodeField = () => {
   const editNetwork: INetwork | undefined | null = useSelector(
      (s: RootState) => s.networkAdmin.editedNetwork
   );

   const dispatch = useDispatch();
   const onChange = (e: any) => {
      dispatch(updateNetworkCodeProperty(e.target.value));
   };

   return (
      <FormControl fullWidth>
         <TextField
            required
            size='small'
            label='Network Code'
            value={editNetwork?.networkCode}
            onChange={onChange} />
      </FormControl>
   );
};

const NetworkDescriptionField = () => {
   const editNetwork: INetwork | undefined | null = useSelector(
      (s: RootState) => s.networkAdmin.editedNetwork
   );

   const dispatch = useDispatch();
   const onChange = (e: any) => {
      dispatch(updateNetworkDescriptionProperty(e.target.value));
   };

   return (
      <FormControl fullWidth>
         <TextField
            required
            size='small'
            label='Network Code'
            value={editNetwork?.description}
            onChange={onChange} />
      </FormControl>
   );
};

const NetworkToggleOptions = () => {
   const dispatch = useDispatch();
   const editNetwork: INetwork | undefined | null = useSelector((s: RootState) => s.networkAdmin.editedNetwork);

   const onChange = (propName: keyof INetwork, value: boolean) => {
      switch (propName) {
         case 'primaryEventsAsPromos':
            dispatch(updateUsePrimaryEventsAsPromos(value));
            break;
         case 'useCustomEventParameters':
            dispatch(updateUseCustomEventParameters(value));
            break;
         case 'splitAInventories':
            dispatch(updateUseSplitAInventories(value));
            break;
         case 'movePrimaryEventsToBreaks':
            dispatch(updateMovePrimaryEventsToBreaks(value));
            break;
         case 'shopsAssetChangeAppNotifications':
            dispatch(updateUseShopsChangeNotifications(value));
            break;
         case 'enablePallets':
            dispatch(updateEnablePallets(value));
            break;
         default:
            break;
      }
   };

   return (
      <Grid item xs={6}>
         <Grid container>

            <Grid item xs={6}>
               <FormControlLabel
                  label='Primary Events as Promos'
                  control={
                     <Switch
                        checked={editNetwork?.primaryEventsAsPromos}
                        onChange={() => onChange('primaryEventsAsPromos', !editNetwork?.primaryEventsAsPromos)} />
                  } />
            </Grid>

            <Grid item xs={6}>
               <FormControlLabel
                  label='Use Custom Event Parameters'
                  control={
                     <Switch
                        checked={editNetwork?.useCustomEventParameters}
                        onChange={() => onChange('useCustomEventParameters', !editNetwork?.useCustomEventParameters)} />
                  } />
            </Grid>

            <Grid item xs={6}>
               <FormControlLabel
                  label='Split "A" Inventories'
                  control={
                     <Switch
                        checked={editNetwork?.splitAInventories}
                        onChange={() => onChange('splitAInventories', !editNetwork?.splitAInventories)} />
                  } />
            </Grid>

            <Grid item xs={6}>
               <FormControlLabel
                  label='Move Primary Events to Breaks'
                  control={
                     <Switch
                        checked={editNetwork?.movePrimaryEventsToBreaks}
                        onChange={() => onChange('movePrimaryEventsToBreaks', !editNetwork?.movePrimaryEventsToBreaks)} />
                  } />
            </Grid>

            <Grid item xs={6}>
               <FormControlLabel
                  label='Shops Change Notifications'
                  control={
                     <Switch
                        checked={editNetwork?.shopsAssetChangeAppNotifications}
                        onChange={() => onChange('shopsAssetChangeAppNotifications', !editNetwork?.shopsAssetChangeAppNotifications)} />
                  } />
            </Grid>

            <Grid item xs={6}>
               <FormControlLabel
                  label='Enable Pallets'
                  control={
                     <Switch
                        checked={editNetwork?.enablePallets}
                        onChange={() => onChange('enablePallets', !editNetwork?.enablePallets)} />
                  } />
            </Grid>
         </Grid>
      </Grid>
   );
};