import { BEARER_TOKEN } from '../../secrets'

export const GetShopsChangeNotificationsApi = async (networkId: number) => {
   const config = {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Authorization': 'Basic ' + BEARER_TOKEN,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ networkId })
   };

   return fetch('http://localhost:5000/api/Shops/GetShopsNotificationChanges', config)
      .then((res) => res.json())
      .catch((err) => { throw err; });
};
