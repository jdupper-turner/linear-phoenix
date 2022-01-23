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
}

interface IUserAdminState {
   loading: boolean
   users: IUser[]
   usersById: { [key: number]: IUser }
   currentUser: IUser | null
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