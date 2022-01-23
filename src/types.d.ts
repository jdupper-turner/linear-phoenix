interface INavigationState {
   currentPage: string
   currentDropdown: string | null
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