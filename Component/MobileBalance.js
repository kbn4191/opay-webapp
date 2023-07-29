import { Box, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";


function MobileBalance() {

    return(
      <>
        <Box sx={{backgroundColor:"#0CB486", height:"219px", padding:"20px", marginTop:"28px", borderRadius:"30px"}}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box gap={3} sx={{display:"flex"}}>
            <Typography sx={{color:"#FFFFFF", fontSize:"16px", fontWeight:"600", lineHeight:"150%"}}>Total Balance</Typography>
            <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></SvgIcon>
            </Box>
            <Box gap={5} sx={{display:"flex", alignItems:"center"}}>
            <Image src="/rewardm.png" width={22} height={23}></Image>
            <Typography sx={{color:"#FFFFFF", fontSize:"18px", fontWeight:"600", lineHeight:"150%"}}>Tier 1</Typography>
            </Box>
         
            </Box>
            <Typography sx={{fontSize:"30px", fontWeight:"600", color:"white", lineHeight:"150%", marginTop:"7px"}}>₦ 7,500,000</Typography>
          <Box gap={2} sx={{marginTop:"21px", display:"flex"}}>
          <Typography sx={{fontSize:"16px", fontWeight:"600", lineHeight:"150%", color:"white"}}>Transaction History</Typography>
          <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.08" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </SvgIcon>
          </Box>
        </Box>
        
        </>
    )
    
}
export default MobileBalance;