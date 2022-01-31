import { Box, Tab, Tabs, Typography } from '@mui/material';
import { FC, SyntheticEvent, useState } from  'react';
import { CampaignAdminTab } from './CampaignAdminTab';
import { FranchiseAdminTab } from './FranchiseAdminTab';
import { PromoGroupAdmin } from './PromoGroupAdmin';

const styles = {
   tabContainer: {
      maxHeight: '80vh',
      overflow: 'auto'
   }
};

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







export const PlanningAdminTabContainer: FC = () => {
   const [value, setValue] = useState(0);

   const handleChange = (_event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
               <Tab label='Franchise' {...a11yProps(0)} />
               <Tab label='Campaign' {...a11yProps(1)} />
               <Tab label='Promo Group' {...a11yProps(2)} />
               <Tab label='Graphic Group' {...a11yProps(3)} />
               <Tab label='Graphic Types' {...a11yProps(4)} />
            </Tabs>
         </Box>

         <TabPanel value={value} index={0}>
            <Box sx={styles.tabContainer}>
               <FranchiseAdminTab />
            </Box>
         </TabPanel>

         <TabPanel value={value} index={1}>
            <Box sx={styles.tabContainer}>
               <CampaignAdminTab />
            </Box>
         </TabPanel>

         <TabPanel value={value} index={2}>
            <Box sx={styles.tabContainer}>
               <PromoGroupAdmin />
            </Box>
         </TabPanel>
      </Box>
   );
};