import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SchedulePeriodWeek } from './components/SchedulePeriodWeek'

export const SchedulePeriodPage = () => {
   const dispatch = useDispatch()

   useEffect(() => {
   }, [dispatch])

   return (
      <main>
         <h3>Schedule Periods Page</h3>
         <div>
            <SchedulePeriodWeek weekStartDate={new Date()} />
         </div>
      </main>
   )
}