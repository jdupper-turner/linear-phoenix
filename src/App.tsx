import { Routes, Route } from 'react-router-dom';
import { Grid, Paper, Switch } from '@mui/material';
import { HomePage } from './views/Home/HomePage';
import { SchedulePeriodPage } from './views/SchedulePeriod/SchedulePeriodPage';
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
            <Paper sx={{height:'100%'}}>
               <Grid container>
                  <NavigationBar />
                  <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
               </Grid>
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/SchedulePeriod' element={<SchedulePeriodPage />} />
                  <Route path='/Reports/AsRun' element={<AsRunReportPage />} />
                  <Route path='/Admin/Network' element={<NetworkAdminPage />} />
                  <Route path='/Admin/User' element={<UserAdminPage />} />
                  <Route path='/Admin/UserActivity' element={<UserActivityPage />} />
               </Routes>
            </Paper>
         </ThemeProvider>
      </main>
   );
}

export default App;