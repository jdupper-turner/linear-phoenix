import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NetworkAdminTable } from './NetworkAdminTable';
import { NetworkMediaLengthsTable } from './NetworkAdminMediaLengthsTable';


interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function NetworkAdminTabContainer() {
   const [value, setValue] = React.useState(0);

   const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
               <Tab label="Network Admin" {...a11yProps(0)} />
               <Tab label="Media Lengths" {...a11yProps(1)} />
               <Tab label="Day Parts" {...a11yProps(2)} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            <NetworkAdminTable />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <NetworkMediaLengthsTable />
         </TabPanel>
         <TabPanel value={value} index={2}>
            Day Parts
         </TabPanel>
      </Box>
   );
}
