import { BEARER_TOKEN } from '../../../secrets';

const apiGetConfig = {
   method: 'GET',
   cors: 'no-cors',
   headers: new Headers({
      'Authorization': 'Basic ' + BEARER_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded'
   })
};

export const GetNetworksApi = async () => {
     return new Promise((resolve) => {
        return fetch(`http://localhost:5000/api/Network`, apiGetConfig)
         .then(res => resolve(res.json()));
   });
};


export const GetMediaLengthsApi = async (networkId: number) => {
   return new Promise((resolve) => {
      return fetch(`http://localhost:5000/api/PromoMediaLength/${networkId}`, apiGetConfig)
         .then(res => resolve(res.json()));
   });
};



export const GetDayPartsApi = async (networkId: number) => {
   return new Promise((resolve) => {
      return fetch(`http://localhost:5000/api/DayPart/${networkId}`, apiGetConfig)
         .then((res) => resolve(res.json()));
   });
};