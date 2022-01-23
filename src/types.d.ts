interface INavigationState {
   currentPage: string
   currentDropdown: string | null
}

interface ISchedulePeriodState {
   loading: boolean
   schedulePeriod: ISchedulePeriod | null
}

interface ISchedulePeriod {
   id: number
   startDate: string
   endDate: string
}

interface INetworkAdminState {
   loading: boolean
   networks: INetwork[]
   currentNetwork: INetwork | null
}

interface INetwork {
   networkCode: string;
}