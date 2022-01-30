interface INavigationState {
   currentPage: string
   currentDropdown: string | null
}

interface IHomePageState {
   loading: boolean
   statusMessage: string
   shopsChangeNotifications: IShopsChangeNotification[]
}



interface ISchedulePeriodState {
   loading: boolean
   schedulePeriod: ISchedulePeriod | null
}

interface INetworkAdminState {
   loading: boolean
   
   networks: INetwork[]
   networksById: { [key: number]: INetwork }
   currentNetwork: INetwork | null
   
   mediaLengths: IMediaLength[]
   mediaLengthsById: { [key: number]: IMediaLength }
   currentMediaLength: IMediaLength | null

   dayParts: IDayPart[]
   dayPartsById: { [key: number]: IDayPart }
   currentDayPart: IDayPart | null
}

interface IUserAdminState {
   loading: boolean
   users: IUser[]
   usersById: { [key: number]: IUser }
   currentUser: IUser | null
}

interface IUserActivityState {
   loading: boolean
   userActivity: IUserActivity[]
   userActivityById: { [key: number]: IUserActivity }

   userActivityTypes: IUserActivityType[]
   userActivityTypesById: { [key: number]: IUserActivityType }
}








interface IDayPart {
   id: number
   name: string
   startTime: number
   endTime: number
}

interface IMediaLength {
   id: number
   length: number
   active: boolean
   exactLengthMatch: boolean
}

interface INetwork {
   id: number
   networkCode: string
   description: string
}

interface ISchedulePeriod {
   id: number
   startDate: string
   endDate: string
}

interface IUser {
   id: number
   userName: string
   emailAddress: string
}

interface IUserActivity {
   id: number
   networkId: number
   userActivityTypeId: number
   change: string
   changedBy: number
   changedOn: Date
   status: string  
   startDate?: Date
   endDate?: Date
}

interface IUserActivityType {
   id: number
   name: string
}

interface IShopsChangeNotification {
   id: number
   cid: string
   description: string
   status: string
   shopsUpdatedOn: Date
   isSynced: boolean
   shopsChangeNotifications: any[]
   schedulePeriods: any[]
}