import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';


const styles = {
   dayOfWeekTile: {
      height: '3.5rem',
      minWidth: '6rem',
      border: '1px solid dodgerblue'
   },
   weekOfMonthTile: {
      width: '42rem',
      border: '1px solid blue',
      margin: '1rem'
   }
};


export interface ISchedulePeriodWeek {
   weekStartDate: Date
}

export const SchedulePeriodWeek: FC<ISchedulePeriodWeek> = (props: ISchedulePeriodWeek) => {
   let tempDate = dayjs(props.weekStartDate).add(-1, 'week');
   const weekOfMonthTiles = [];

   for (var i = 0; i < 7; ++i) {
      weekOfMonthTiles.push(
         <Box key={i} sx={styles.weekOfMonthTile}>
            {tempDate.format("MM/DD/YYYY")}
            {SchedulePeriodCalendarWeek(tempDate)}
         </Box>
      );

      tempDate = dayjs(tempDate).add(1, 'week');
   }

   return (
      <Box>
         <Grid>
            {weekOfMonthTiles}
         </Grid>
      </Box>
   );
};


const SchedulePeriodCalendarWeek = (date: dayjs.Dayjs) => {
   const dayOfWeekTiles: any[] = [];
   const daysOfWeek: number[] = [1, 2, 3, 4, 5, 6, 0];

   daysOfWeek.forEach((dayOfWeek: number, index: number) => {
      dayOfWeekTiles.push(
         <Grid item xs={1} sx={styles.dayOfWeekTile}>
            {date.add(dayOfWeek, 'day').format("ddd")}
         </Grid>
      );
   });

   return (
      <Box>
         <Grid container>
            {dayOfWeekTiles}
         </Grid>
      </Box>
   )
}