import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import { HomePage } from './views/Home/HomePage';
import { SchedulePeriodPage } from './views/SchedulePeriod/SchedulePeriodPage';
import { AsRunReportPage } from './views/Reports/AsRun/AsRunReportPage';
import { NavigationBar } from './views/Navigation/NavigationBar';
import { UserAdminPage } from './views/Admin/User/UserAdminPage'
import { NetworkAdminPage } from './views/Admin/Network/NetworkAdminPage';
import './App.css';


function App() {
   return (
      <div className='App'>
         <Grid container>
            <NavigationBar />
         </Grid>

         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/SchedulePeriod' element={<SchedulePeriodPage />} />
            <Route path='/Reports/AsRun' element={<AsRunReportPage />} />
            <Route path='/Admin/Network' element={<NetworkAdminPage />} />
            <Route path='/Admin/User' element={<UserAdminPage />} />
         </Routes>
      </div>
   );
}

export default App;