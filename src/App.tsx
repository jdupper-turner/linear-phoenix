import { Routes, Route } from 'react-router-dom';
import { Box, Grid, Paper, Switch } from '@mui/material';
import { HomePage } from './views/Home/HomePage';
import { SchedulePeriodPage } from './views/SchedulePeriod/SchedulePeriodsPage';
import { AsRunReportPage } from './views/Reports/AsRun/AsRunReportPage';
import { NavigationBar } from './views/Navigation/NavigationBar';
import { UserActivityPage } from './views/Admin/UserActivity/UserActivityPage';
import { UserAdminPage } from './views/Admin/User/UserAdminPage'
import { NetworkAdminPage } from './views/Admin/Network/NetworkAdminPage';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getAllNetworks } from './views/Admin/Network/NetworkAdminStore';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { PlanningAdminPage } from './views/Admin/Planning/PlanningAdminPage';

function App() {
   const [darkMode, setDarkMode] = useState<boolean>(true);

   const theme = createTheme({
      palette: {
         mode: darkMode ? 'dark' : 'light'
      }
   });

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAllNetworks())
   }, [dispatch]);

   return (
      <main className='App'>
         <ThemeProvider theme={theme}>
            <Paper sx={{ height: '100vh' }}>
               <Grid container>
                  <NavigationBar />
                  <Box sx={{display:'inline'}}>
                     <Grid container>
                        <Grid item><LightModeIcon sx={{ pt: 1 }} /></Grid>
                        <Grid item><Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /></Grid>
                        <Grid item><DarkModeIcon sx={{ pt: 1 }} /></Grid>
                     </Grid>
                  </Box>
               </Grid>
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/SchedulePeriod' element={<SchedulePeriodPage />} />
                  <Route path='/Reports/AsRun' element={<AsRunReportPage />} />
                  <Route path='/Admin/Network' element={<NetworkAdminPage />} />
                  <Route path='/Admin/Planning' element={<PlanningAdminPage />} />
                  <Route path='/Admin/User' element={<UserAdminPage />} />
                  <Route path='/Admin/UserActivity' element={<UserActivityPage />} />
               </Routes>
            </Paper>
         </ThemeProvider>
      </main>
   );
}

export default App;