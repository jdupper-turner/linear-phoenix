import { Box, Grid } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PlanningAdminTabContainer } from './components/PlanningAdminTabContainer';


export const PlanningAdminPage: FC = () => {
   const dispatch = useDispatch();
   useEffect(() => { }, [dispatch]);
   
   return (
      <Box>
         <Grid container>
            <PlanningAdminTabContainer />
         </Grid>
      </Box>
   )
};