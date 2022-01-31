import { Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import { getStartOfCurrentMonth } from '../../utils/timeUtils';
import { SchedulePeriodMonth } from './components/SchedulePeriodMonth';


export const SchedulePeriodPage = () => {
   const [thisMonth, setThisMonth] = useState<Date>(getStartOfCurrentMonth());
   const [lastMonth, setLastMonth] = useState<dayjs.Dayjs>(dayjs(thisMonth).subtract(1, 'month'));
   const [nextMonth, setNextMonth] = useState<dayjs.Dayjs>(dayjs(thisMonth).add(1, 'month'));

   const onPriorMonthToggle = () => {
      const lastMonth = dayjs(thisMonth).subtract(1, 'month');
      const twoMonthsAgo = dayjs(thisMonth).subtract(2, 'month');
      setLastMonth(twoMonthsAgo);
      setThisMonth(lastMonth.toDate());
      setNextMonth(dayjs(thisMonth));
   };

   const onNextMonthToggle = () => {
      const nextMonth = dayjs(thisMonth).add(1, 'month');
      const twoMonthsFromNow = nextMonth.add(1, 'month');
      setLastMonth(dayjs(thisMonth));
      setThisMonth(nextMonth.toDate());
      setNextMonth(twoMonthsFromNow);
   };

   return (
      <main>
         <h3>Schedule Periods Page</h3>

         <div>
            <Button variant='outlined' onClick={onPriorMonthToggle}>
               {`<< ${lastMonth.format('MMMM YYYY')}`}
            </Button>

            <Typography sx={{ display: 'inline' }}>
               {dayjs(thisMonth).format('MMMM YYYY')}
            </Typography>

            <Button variant='outlined' onClick={onNextMonthToggle}>
               {`${nextMonth.format('MMMM YYYY')} >>`}
            </Button>
         </div>

         <div>
            <SchedulePeriodMonth startDate={thisMonth} />
         </div>
      </main>
   );
};