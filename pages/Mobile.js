import { Avatar, AvatarGroup, Box, SvgIcon, Typography } from "@mui/material";
import MobileBalance from "../Component/MobileBalance";
import Payment from "../Component/MobilePayment";
import TaskBar from "../Component/Taskbar";

function Mobile () {

    return(
        <>
        <Box sx={{backgroundColor:"#ECEEF2", paddingX:"14px", paddingTop:"30px"}}>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Box gap={2} sx={{display:"flex", alignItems:"center"}}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />

                <Typography sx={{fontSize:"17px", fontWeight:"400", lineHeight:"150%", colr:"#283545"}}>Hello, Kalu Comfort</Typography>
                </Box>
                <Box gap={5} sx={{display:"flex"}}>
                    <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 11C20 8.87827 19.1571 6.84344 17.6569 5.34315C16.1566 3.84285 14.1217 3 12 3C9.87827 3 7.84344 3.84285 6.34315 5.34315C4.84285 6.84344 4 8.87827 4 11" stroke="#7C8186" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 18V18.5C20 19.0304 19.7893 19.5391 19.4142 19.9142C19.0391 20.2893 18.5304 20.5 18 20.5H14.5M2 15.438V13.562C2.00007 13.116 2.1492 12.6828 2.4237 12.3313C2.69821 11.9798 3.08232 11.7301 3.515 11.622L5.255 11.186C5.34342 11.164 5.43569 11.1624 5.52481 11.1813C5.61393 11.2003 5.69757 11.2393 5.76937 11.2954C5.84118 11.3515 5.89926 11.4232 5.93922 11.5051C5.97918 11.587 5.99997 11.6769 6 11.768V17.231C6.00016 17.3223 5.97947 17.4124 5.93952 17.4946C5.89957 17.5767 5.84141 17.6486 5.76946 17.7048C5.69752 17.761 5.61369 17.8001 5.52436 17.819C5.43503 17.8379 5.34257 17.8362 5.254 17.814L3.514 17.379C3.08151 17.2707 2.69762 17.0209 2.42331 16.6694C2.149 16.3179 2.00001 15.8849 2 15.439V15.438ZM22 15.438V13.562C21.9999 13.116 21.8508 12.6828 21.5763 12.3313C21.3018 11.9798 20.9177 11.7301 20.485 11.622L18.745 11.186C18.6566 11.164 18.5643 11.1624 18.4752 11.1813C18.3861 11.2003 18.3024 11.2393 18.2306 11.2954C18.1588 11.3515 18.1007 11.4232 18.0608 11.5051C18.0208 11.587 18 11.6769 18 11.768V17.231C17.9999 17.3222 18.0206 17.4122 18.0604 17.4942C18.1003 17.5763 18.1584 17.6481 18.2302 17.7043C18.3021 17.7605 18.3857 17.7996 18.4749 17.8186C18.5641 17.8376 18.6565 17.836 18.745 17.814L20.485 17.379C20.9177 17.2708 21.3018 17.0212 21.5763 16.6697C21.8508 16.3182 21.9999 15.885 22 15.439V15.438Z" stroke="#7C8186" stroke-width="1.5"/>
  <path d="M13.5 22H10.5C10.1022 22 9.72064 21.842 9.43934 21.5607C9.15804 21.2794 9 20.8978 9 20.5C9 20.1022 9.15804 19.7206 9.43934 19.4393C9.72064 19.158 10.1022 19 10.5 19H13.5C13.8978 19 14.2794 19.158 14.5607 19.4393C14.842 19.7206 15 20.1022 15 20.5C15 20.8978 14.842 21.2794 14.5607 21.5607C14.2794 21.842 13.8978 22 13.5 22Z" stroke="#7C8186" stroke-width="1.5"/>
</svg></SvgIcon>
                    <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0206 2.91C8.71058 2.91 6.02058 5.6 6.02058 8.91V11.8C6.02058 12.41 5.76058 13.34 5.45058 13.86L4.30058 15.77C3.59058 16.95 4.08058 18.26 5.38058 18.7C9.69058 20.14 14.3406 20.14 18.6506 18.7C19.8606 18.3 20.3906 16.87 19.7306 15.77L18.5806 13.86C18.2806 13.34 18.0206 12.41 18.0206 11.8V8.91C18.0206 5.61 15.3206 2.91 12.0206 2.91Z" stroke="#7C8186" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
  <path d="M13.8699 3.2C12.6606 2.85559 11.3792 2.85559 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z" stroke="#7C8186" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.0195 19.06C15.0195 20.71 13.6695 22.06 12.0195 22.06C11.1995 22.06 10.4395 21.72 9.89953 21.18C9.33769 20.6173 9.02132 19.8552 9.01953 19.06" stroke="#7C8186" stroke-width="1.5" stroke-miterlimit="10"/>
</svg></SvgIcon>
                </Box>
            </Box>

<MobileBalance/>

        </Box>
        <Box sx={{background:"linear-gradient(140deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.20) 100%)", boxShadow:"0px 4px 24px -1px rgba(0, 0, 0, 0.10)",
         backdropFilter:"blur(20px)", position:"absolute", top:"259px", width:"100%", paddingX:"14px", paddingY:"32px" }}>
      <Box gap={5} sx={{display:"flex", justifyContent:"center" }}>
        <Box  >
        <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"62px", 
        height:"62px", 
        marginLeft:1,
        borderRadius:"62px", backgroundColor:"white", 
        filter:"drop-shadow(0px 0.6296296119689941px 3.1481480598449707px rgba(136, 145, 156, 0.03)) drop-shadow(0px 2.7703704833984375px 6.518518447875977px rgba(136, 145, 156, 0.05)) drop-shadow(0px 6.800000190734863px 13px rgba(136, 145, 156, 0.07)) drop-shadow(0px 13.096296310424805px 25.481481552124023px rgba(136, 145, 156, 0.09)) drop-shadow(0px 22.037036895751953px 46.85185241699219px rgba(136, 145, 156, 0.11)) drop-shadow(0px 34px 80px rgba(136, 145, 156, 0.14))"}}>
            <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 8.5H14.5M6 16.5H8M10.5 16.5H14.5" stroke="#0CB486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5M20 3.5V9.5M20 9.5L22 7.5M20 9.5L18 7.5" stroke="#0CB486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </SvgIcon> 
          
            </Box>
            <Typography sx={{marginTop:"7px", fontSize:"16px",
             fontWeight:"400", lineHeight:"150%", color:"#283545",
            
             
             }}>Add Money </Typography>
        </Box>
        <Box >
        <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"62px", 
        height:"62px", 
        marginLeft:0,
        borderRadius:"62px", backgroundColor:"white", 
        filter:"drop-shadow(0px 0.6296296119689941px 3.1481480598449707px rgba(136, 145, 156, 0.03)) drop-shadow(0px 2.7703704833984375px 6.518518447875977px rgba(136, 145, 156, 0.05)) drop-shadow(0px 6.800000190734863px 13px rgba(136, 145, 156, 0.07)) drop-shadow(0px 13.096296310424805px 25.481481552124023px rgba(136, 145, 156, 0.09)) drop-shadow(0px 22.037036895751953px 46.85185241699219px rgba(136, 145, 156, 0.11)) drop-shadow(0px 34px 80px rgba(136, 145, 156, 0.14))"}}>
            <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 8.5H14.5M6 16.5H8M10.5 16.5H14.5" stroke="#0CB486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5M20 3.5V9.5M20 9.5L22 7.5M20 9.5L18 7.5" stroke="#0CB486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </SvgIcon> 
          
            </Box>
            <Typography sx={{marginTop:"7px", fontSize:"16px",
             fontWeight:"400", lineHeight:"150%", color:"#283545",
            
             
             }}>Transfer </Typography>
        </Box>
        <Box  >
        <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"62px", 
        height:"62px", 
        marginLeft:0,
        borderRadius:"62px", backgroundColor:"white", 
        filter:"drop-shadow(0px 0.6296296119689941px 3.1481480598449707px rgba(136, 145, 156, 0.03)) drop-shadow(0px 2.7703704833984375px 6.518518447875977px rgba(136, 145, 156, 0.05)) drop-shadow(0px 6.800000190734863px 13px rgba(136, 145, 156, 0.07)) drop-shadow(0px 13.096296310424805px 25.481481552124023px rgba(136, 145, 156, 0.09)) drop-shadow(0px 22.037036895751953px 46.85185241699219px rgba(136, 145, 156, 0.11)) drop-shadow(0px 34px 80px rgba(136, 145, 156, 0.14))"}}>
            <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 8.5H14.5M6 16.5H8M10.5 16.5H14.5" stroke="#0CB486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5M20 3.5V9.5M20 9.5L22 7.5M20 9.5L18 7.5" stroke="#0CB486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </SvgIcon> 
          
            </Box>
            <Typography sx={{marginTop:"7px", fontSize:"16px",
             fontWeight:"400", lineHeight:"150%", color:"#283545",
            
             
             }}>Withdraw </Typography>
        </Box>
            <Box>
                </Box>
                </Box>
                </Box>

                <Box sx={{ paddingX:"14px", paddingTop:"130px"}}>
                    <Payment/>
                    
                    </Box>  
                    <TaskBar></TaskBar> 

                     
                </>
    )
    
}

export default Mobile;