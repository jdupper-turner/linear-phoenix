import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { getMonday } from '../../../utils/timeUtils';
import dayjs from 'dayjs';
import { SchedulePeriodWeek } from './SchedulePeriodWeek';

export interface ISchedulePeriodMonth {
   startDate: Date
}

export const SchedulePeriodMonth: FC<ISchedulePeriodMonth> = (props: ISchedulePeriodMonth) => {
   const firstMonday: Date = getMonday(props.startDate);
   const mondays: Date[] = [];

   for (let i = 0; i < 5; ++i) {
      mondays.push(
         dayjs(firstMonday).add(7 * i, 'day').toDate()
      );
   }

   return (
      <Box>
         <Grid container>
            {mondays.map((monday: Date, index: number) => (
               <Grid key={index} item xs={12}>
                  <SchedulePeriodWeek key={index} weekStartDate={monday} />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};