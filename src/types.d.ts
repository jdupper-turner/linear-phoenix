type NavigationPlanning = 'Last Promo Planning' | 'Last Graphic Planning'
type NavigationReports = 'As Run' | 'Detailed Media Group' | 'Executive Media Group' | 'Inventory Summary'
type NavigationAdmin = 'Planning' | 'Mapping' | 'Network' | 'User Activity' | 'User' | 'Activity Logs'
type CurrentPage = 'Home' | 'Schedule Period' | NavigationPlanning | NavigationReports | NavigationAdmin

interface INavigationState {
   currentPage: CurrentPage
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