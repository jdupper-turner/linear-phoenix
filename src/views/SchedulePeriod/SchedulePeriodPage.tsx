import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { getSchedulePeriodById } from './SchedulePeriodStore'
import dayjs from 'dayjs'

export const SchedulePeriodPage = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      // dispatch(getSchedulePeriodById(4585))
   }, [dispatch])

   const createCalendar = () => {
      const weeks: any = []

      for (var i = 0; i < 8; ++i) {
         const day = dayjs().startOf('w').add(1, 'day').add(i, 'w');
         if (i === 4) weeks.push(<br key={-1} />)
         weeks.push(<div key={i}>{day.format('MM/DD/YYYY')}</div>)
      }

      return weeks
   }

   return (
      <main>
         <h3>Schedule Period Page</h3>
         <div>
            {createCalendar()}
         </div>
      </main>
   )
}