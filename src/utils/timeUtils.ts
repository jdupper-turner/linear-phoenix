import dayjs from 'dayjs';

export function convertSecondsToDuration(seconds: number): string {
   const date = dayjs().startOf('day');
   const date2 = date.add(seconds, 's');
   return date2.format('hh:mm A');
}