import { FC } from 'react';
import { Box, Button, Grid, Stack, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

const styles = {
   dayOfWeekTile: {
      padding: 5,
      border: '1px solid dodgerblue',
   }
};

export interface ISchedulePeriodWeek {
   weekStartDate: Date
}

export const SchedulePeriodWeek: FC<ISchedulePeriodWeek> = (props: ISchedulePeriodWeek) => {
   const dayOfWeekTiles: any[] = [];
   const daysOfWeek: number[] = [0, 1, 2, 3, 4, 5, 6];

   daysOfWeek.forEach((dayOfWeek: number, index: number) => {
      dayOfWeekTiles.push(
         <Grid item xs={1} key={dayOfWeek + index} sx={styles.dayOfWeekTile}>
            {dayjs(props.weekStartDate).add(dayOfWeek, 'day').format("ddd MM/DD")}
         </Grid>
      );
   });

   return (
      <Box sx={{ mt: 2 }}>
         <Grid container>
            <Stack>
               <Button>
                  <Tooltip title='Edit Name'>
                     <EditSharpIcon />
                  </Tooltip>
               </Button>

               <Button>
                  <Tooltip title='Planning'>
                     <AccessTimeSharpIcon />
                  </Tooltip>
               </Button>

               <Button>
                  <Tooltip title='Import Logs'>
                     <DownloadSharpIcon />
                  </Tooltip>
               </Button>

            </Stack>
            {dayOfWeekTiles}
         </Grid>
      </Box>
   )
};