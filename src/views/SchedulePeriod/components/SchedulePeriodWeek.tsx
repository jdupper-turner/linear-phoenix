import { FC } from 'react';
import { Box, Grid } from '@mui/material';

export interface ISchedulePeriodWeek {
   weekStartDate: Date
}

export const SchedulePeriodWeek: FC<ISchedulePeriodWeek> = (props: ISchedulePeriodWeek) => {
   return (
      <Box>
         <Grid></Grid>
      </Box>
   )
};