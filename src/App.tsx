import { Routes, Route } from 'react-router-dom';
import { Grid, Paper, Switch } from '@mui/material';
import { HomePage } from './views/Home/HomePage';
import { SchedulePeriodPage } from './views/SchedulePeriod/SchedulePeriodPage';
import { AsRunReportPage } from './views/Reports/AsRun/AsRunReportPage';
import { NavigationBar } from './views/Navigation/NavigationBar';
import { UserAdminPage } from './views/Admin/User/UserAdminPage'
import { NetworkAdminPage } from './views/Admin/Network/NetworkAdminPage';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react';
import './App.css';


function App() {
   const [darkMode, setDarkMode] = useState<boolean>(true);

   const theme = createTheme({
      palette: {
         mode: darkMode ? 'dark' : 'light'
      }
   });

   return (
      <main className='App'>
         <ThemeProvider theme={theme}>
            <Paper sx={{height:'100vh'}}>
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
               </Routes>
            </Paper>
         </ThemeProvider>
      </main>
   );
}

export default App;