import { Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADMIN_OPTIONS, PLANNING_OPTIONS, REPORT_OPTIONS, setCurrentPage, setDropdownOption } from './NavigationStore';


export const NavigationBar = () => {
   const dispatch = useDispatch()
   const onClick = (option: string) => {
      dispatch(setCurrentPage(option));
   };

   return (
      <Box>
         <Grid container>
            <Grid item xs={12}>

               <Link to='/'>
                  <Button onClick={() => dispatch(setCurrentPage('Home'))}>Home</Button>
               </Link>

               <Link to='/SchedulePeriod'>
                  <Button onClick={() => dispatch(setCurrentPage('Schedule Period'))}>Schedule Period</Button>
               </Link>

               <NavigationMenu index={1} title='Planning' options={PLANNING_OPTIONS} />
               <NavigationMenu index={2} title='Reports' options={REPORT_OPTIONS} />
               <NavigationMenu index={3} title='Admin' options={ADMIN_OPTIONS} />
            </Grid>
         </Grid>
      </Box>
   );
};


interface INavigationMenu {
   index: number
   title: string
   options: string[]
}

const NavigationMenu: FC<INavigationMenu> = (props: INavigationMenu) => {
   const [anchor, setAnchor] = useState<null | HTMLElement>(null);
   const open = Boolean(anchor);

   const dispatch = useDispatch();
   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchor(event.currentTarget);
      dispatch(setDropdownOption(props.title))
   }
   const handleClose = () => setAnchor(null);

   return (
      <div style={{ display: 'inline' }} key={props.index}>
         <Button
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            {props.title}
         </Button>
         <Menu
            id='basic-menu'
            anchorEl={anchor}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
            {props.options.map((o, i) => <NavigationMenuDropdown type={props.title} title={o} index={i} />)}
         </Menu>
      </div>
   );
}


interface INavigationMenuDropdown {
   type: any
   title: string
   index: number
}

const NavigationMenuDropdown: FC<INavigationMenuDropdown> = (props: INavigationMenuDropdown) => {
   const url = props.type + '/' + props.title.replaceAll(' ', '');

   const dispatch = useDispatch();
   const onClick = () => {
      dispatch(setCurrentPage(props.title));
   };

   return (
      <MenuItem key={props.index} onClick={onClick}>
         <Link to={url}>
            {props.title}
         </Link>
      </MenuItem>
   );
};
