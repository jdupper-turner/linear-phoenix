import { FC } from 'react';
import { Box } from '@mui/material';

export interface ISchedulePeriodPage {
   id?: number
   startDate: Date
}

export const SchedulePeriodPage: FC<ISchedulePeriodPage> = (props: ISchedulePeriodPage) => {
   console.log(props);

   return (
      <Box></Box>
   );
};