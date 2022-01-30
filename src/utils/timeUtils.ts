import dayjs from 'dayjs';

export function getStartOfCurrentMonth() {
   var monthStartDate = dayjs().startOf('month');
   console.log(monthStartDate);
}

export function convertSecondsToHHMM(seconds: number): string {
   const date = dayjs().startOf('day');
   const date2 = date.add(seconds, 's');
   return date2.format('hh:mm A');
}