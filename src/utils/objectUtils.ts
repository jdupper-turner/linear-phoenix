export function sortArrayByProperty(list: any[], property: string) {

   const sorted = list.sort((opt1: any, opt2: any) => {
      if (opt1[property] > opt2[property]) return 1;
      if (opt1[property] < opt2[property]) return -1;
      return 0;
   });

   return sorted;
};