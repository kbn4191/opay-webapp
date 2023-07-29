

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import SideBar from '../Component/SideBar';
import { Stack } from '@mui/material';
import DashBody from '../Component/MainBody';
import Mobile from './Mobile';

export default function Index() {
  return (
    <>
    <Container maxWidth={false} sx={{margin:"0px !important", padding:"0px Important", width:"100%",
    display:{
      xs:"none",
      sm:"block"
    }
    
    }}>
      <Stack direction="row">
        <Box> <SideBar></SideBar></Box>
        <Box sx={{width:1}}><DashBody></DashBody></Box>
      </Stack>
     
    </Container>
    <Container sx={{
       display:{
        xs:"block",
        sm:"none"
      },
      padding:"0px !important"
      
    }}>
      <Mobile/>
    </Container>
    </>
   
  );
}
