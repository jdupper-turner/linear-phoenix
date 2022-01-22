import { BEARER_TOKEN } from '../../secrets';

export const GetSchedulePeriodById = (spId: number) => {
   const config = {
      method: 'GET',
      headers: new Headers({
         'Authorization': 'Basic ' + BEARER_TOKEN,
         'Content-Type': 'application/x-www-form-urlencoded'
      })
   }

   return new Promise((resolve) => {
      return fetch(`http://localhost:5001/api/SchedulePeriod/GetBySchedulePeriodId/${spId}`, config)
         .then(res => {
            return resolve(res.json())
         })
   })


}
