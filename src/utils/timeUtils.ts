import dayjs from 'dayjs';


export interface IAvailableDayOfWeek {
   id: number
   name: string
   shortName: string
}

export const AvailableDaysOfWeek: IAvailableDayOfWeek[] = [
   { id: 0, name: 'Sunday', shortName: 'Su' },
   { id: 1, name: 'Monday', shortName: 'Mo' },
   { id: 2, name: 'Tuesday ', shortName: 'Tu' },
   { id: 3, name: 'Wednesday', shortName: 'We' },
   { id: 4, name: 'Thursday', shortName: 'Th' },
   { id: 5, name: 'Friday', shortName: 'Fr' },
   { id: 6, name: 'Saturday', shortName: 'Sa' }
];


export function convertSecondsToHHMM(seconds: number): string {
   const date = dayjs().startOf('day');
   const date2 = date.add(seconds, 's');
   return date2.format('hh:mm A');
}

export function getStartOfCurrentMonth(): Date {
   return dayjs().startOf('month').toDate();
}

export function getDayOfWeek(date: Date | string): IAvailableDayOfWeek {
   const dayOfWeek = dayjs(date).day();
   return AvailableDaysOfWeek[dayOfWeek];
}

export function getMonday(d: Date | string): Date {
   d = new Date(d);
   const day = d.getDay();
   const diff = d.getDate() - day + (day === 0 ? -6 : 1);
   return new Date(d.setDate(diff));
}
