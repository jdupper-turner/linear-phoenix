import { BEARER_TOKEN } from '../../../secrets';

export interface GetUserActivityRequest {
   networkId: number
   change: string
   userActivityTypeIds: number[]
}

export const GetUserActivityApi = async (payload: GetUserActivityRequest) => {
   const config = {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Authorization': 'Basic ' + BEARER_TOKEN,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
   };

   return fetch('http://localhost:5000/api/UserActivity/Get', config)
      .then((res) => res.json());
};

export const GetUserActivityTypeApi = async () => {
   const config = {
      method: 'get',
      headers: {
         'Accept': 'application/json',
         'Authorization': 'Basic ' + BEARER_TOKEN,
         'Content-Type': 'application/json'
      }
   };

   return fetch('http://localhost:5000/api/UserActivityType/Get', config)
      .then((res) => res.json());
};