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