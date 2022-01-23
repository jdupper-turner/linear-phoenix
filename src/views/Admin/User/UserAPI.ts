import { BEARER_TOKEN } from '../../../secrets';

export const GetAllUsersApi = async () => {
   const config = {
      method: 'GET',
      cors: 'no-cors',
      headers: new Headers({
         'Authorization': 'Basic ' + BEARER_TOKEN,
         'Content-Type': 'application/x-www-form-urlencoded'
      })
   }

   return new Promise((resolve) => {
      return fetch(`http://localhost:5000/api/User`, config)
         .then(res => resolve(res.json()))
   })
};