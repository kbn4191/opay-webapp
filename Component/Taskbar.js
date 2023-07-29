import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SvgIcon, colors } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RedeemRoundedIcon from '@mui/icons-material/RedeemRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';

 function TaskBar() {
  const [value, setValue] = React.useState(0);

  return (
    <>
   
    <Box sx={{ width: "100%", position: 'fixed', bottom: 0, left: 0, right: 0  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>} />
        <BottomNavigationAction label="Reward" icon={<RedeemRoundedIcon/>} />
       
        <BottomNavigationAction label="finance" icon={<AssessmentRoundedIcon/>} />
        <BottomNavigationAction label="card" icon={<CreditCardRoundedIcon />} />
      </BottomNavigation>
     
    </Box>
    <Box sx={{backgroundColor:"#0CB486", width:"48px !important", height:"48px", 
    borderRadius:"100%", 
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute", 
    top:"87%",
     position: 'fixed',
      bottom: 0, left: "45%", right: 0,
   outline:"6px solid #D9D9D9",
  
    

    
    
    }}> <BottomNavigationAction label="finance" icon={<SvgIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M1 8V6C1 3 3 1 6 1H16C19 1 21 3 21 6V8M1 14V16C1 19 3 21 6 21H16C19 21 21 19 21 16V14M1 11H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </SvgIcon>} 
     /></Box>
    </>
  );
}
export default TaskBar;