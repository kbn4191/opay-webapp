
import { Typography, styled, Box, Divider, TextField, InputBase, InputAdornment, SvgIcon, Button, Avatar, Stack, ButtonGroup} from "@mui/material";
import Image from 'next/image';

import BasicTable from "./TransactionTable.js";
import BarChart from "./Barchat.js";



const DashContainer = styled (Box) ({
    paddingLeft:"25px",
    paddingTop:"20px",
    paddingRight:"41px",
   
    
});
const SearchTextField = styled(TextField)({
    width:"337px",
    marginBottom:"20px",
    backgroundColor:"#F8F9FB",
    borderRadius:"5px",
    '& input:valid + fieldset': {
      borderColor: '#E0E3E7',
      borderWidth: 0.5,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 0,
    },
    '& input:valid:focus + fieldset': {
      border: 0,
      
      padding: '4px !important', // override inline-style
    },
  });

 const TileButton = styled (Button) ({
    width: 124,
height: 44,
borderRadius: 5,
backgroundColor:" #EBF5F3",

 })

function DashBody() {
    return(
        <>
        <Box>
            <DashContainer sx={{width: 1}}>
       <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Box>
        <SearchTextField
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon sx={{marginRight:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75ZM22 22.751C21.81 22.751 21.62 22.681 21.47 22.531L19.47 20.531C19.3305 20.3899 19.2523 20.1994 19.2523 20.001C19.2523 19.8026 19.3305 19.6121 19.47 19.471C19.76 19.181 20.24 19.181 20.53 19.471L22.53 21.471C22.82 21.761 22.82 22.241 22.53 22.531C22.38 22.681 22.19 22.751 22 22.751Z" fill="#9B9797"/>
</svg></SvgIcon>
              </InputAdornment>
            ),
          }}
        
        required
     
        defaultValue="Search a transaction"
        id="validation-outlined-input"
      />
      
        </Box>
        <Box gap={3} sx={{display:"flex", alignItems:"center"}}>
          <TileButton>
          <Image src="/reward.png" width={28} height={28}></Image>
          <Typography sx={{color:"#0CB486", fontFamily:"19px", fontWeight:"700", lineHeight:"150%", marginLeft:"11px"}}>Tier 1</Typography>
          </TileButton>
          <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82001C17.9387 7.70404 17.6216 6.61122 17.0252 5.66798C16.4288 4.72474 15.5776 3.96963 14.5699 3.49001C14.3128 3.03335 13.9376 2.65415 13.4838 2.39204C13.0299 2.12993 12.514 1.99454 11.9899 2.00001C10.8999 2.00001 9.91994 2.59001 9.39994 3.52001C7.44994 4.49001 6.09994 6.50001 6.09994 8.82001V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49ZM14.8299 20.01C14.6196 20.5922 14.2352 21.0954 13.7289 21.4515C13.2226 21.8075 12.6189 21.999 11.9999 22C11.2099 22 10.4299 21.68 9.87994 21.11C9.55994 20.81 9.31994 20.41 9.17994 20C9.30994 20.02 9.43994 20.03 9.57994 20.05C9.80994 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07L14.8299 20.01Z" fill="#606E7E"/>
</svg>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        </Box>
       </Box>
       </DashContainer>
        </Box>
      <Box >
      <Divider ></Divider>
      </Box>
      <DashContainer sx={{marginTop:"22px"}}>
      <Stack direction="row" sx={{justifyContent:"space-between", alignItems:"center"}}>
        <Box>
            <Typography sx={{color:"#283545", fontSize:"20px", fontWeight:"600", lineHeight:"150%", fontStyle:"normal", marginBottom:"5px"}}>Darshboard</Typography>
            <Typography sx={{color:"#9B9797", fontSize:"18px", fontWeight:"400", lineHeight:"150%", fontStyle:"normal", marginBottom:"5px"}}>Hello, Comfort Kalu</Typography>
        </Box>
        <Box gap={3} sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>

      

    <Box sx={{width:"53px", height:"44px",marginTop:"10px", padding:"10px", borderRadius:"5px", display:"flex", justifyContent:"center", alignItems:"center", 
    backgroundColor:'#F8F9FB', }}>
      <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.75V2C8.75 1.59 8.41 1.25 8 1.25C7.59 1.25 7.25 1.59 7.25 2V3.56C4.55 3.81 3.24 5.42 3.04 7.81C3.02 8.1 3.26 8.34 3.54 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56ZM20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V10.84C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67L9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.21 14.71C9.02 14.89 8.76 15 8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.07 13.01 8.51 12.92 8.88 13.08C9.01 13.13 9.12 13.2 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71ZM12.71 18.21C12.52 18.39 12.26 18.5 12 18.5C11.74 18.5 11.48 18.39 11.29 18.21C11.11 18.02 11 17.76 11 17.5C11 17.24 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.24 13 17.5C13 17.76 12.89 18.02 12.71 18.21ZM12.71 14.71L12.56 14.83C12.5 14.87 12.44 14.9 12.38 14.92C12.32 14.95 12.26 14.97 12.2 14.98C12.13 14.99 12.07 15 12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.38 13.2 11.49 13.13 11.62 13.08C11.99 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71ZM16.21 18.21C16.02 18.39 15.76 18.5 15.5 18.5C15.24 18.5 14.98 18.39 14.79 18.21C14.61 18.02 14.5 17.76 14.5 17.5C14.5 17.24 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.24 16.5 17.5C16.5 17.76 16.39 18.02 16.21 18.21ZM16.21 14.71L16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17L16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71Z" fill="#606E7E"/>
</svg>
      </SvgIcon>
    </Box>
        </Box>
      </Stack>
      <Box sx={{marginTop:"35px", display:"flex", justifyContent:"space-between", }}>
        <Stack direction="row" sx={{border:"1px solid  #D9D9D9",
         borderRadius:"10px",
        paddingY:"22px",
         paddingX:"24px"
         }}>
          <Box>
          <Box sx={{display:"flex"}}>
          <Typography sx={{fontSize:"16px", fontWeight:"600",color:"#283545", lineHeight:"150%", marginRight:"22px"}}>Total Balance</Typography>
          <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42 11.9999 8.42C13.9799 8.42 15.5799 10.02 15.5799 12Z" stroke="#606E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#606E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </SvgIcon>
          </Box>
            <Typography sx={{fontSize:"24px", fontWeight:"700", color:"#283545", lineHeight:"150%", marginTop:"5px", marginBottom:"26px"}}>₦ 7,500,000</Typography>
       <Box>
       <Button  sx={{
        width:"137px", 
       height:"44px", 
       color:"white", 
       borderRadius:"5px", 
       marginRight:"15px", 
       backgroundColor:" #0CB486",
       fontSize:"16px",
       fontWeight:"600",
       lineHeight:"150%",
       textTransform: "none",
       "&:hover":{
        backgroundColor:"#0C7357"
       }
       }}>
       Withdraw
      </Button>
      <Button  sx={{
        width:"137px", 
       height:"44px", 
       color:"#606E7E", 
       borderRadius:"5px", 
       marginRight:"15px", 
       backgroundColor:" #ECEEF2",
       fontSize:"16px",
       fontWeight:"600",
       lineHeight:"150%",
       textTransform: "none",
       "&:hover":{
        backgroundColor:" #0CB486",
        color:"white"
       }
       }}>
      Transfer
      </Button>
      <Button  sx={{
        width:"137px", 
        height:"44px", 
        color:"#606E7E", 
        borderRadius:"5px", 
        marginRight:"20px", 
        backgroundColor:" #ECEEF2",
        fontSize:"16px",
        fontWeight:"600",
        lineHeight:"150%",
        textTransform: "none",
        
        "&:hover":{
         backgroundColor:" #0CB486",
         color:"white"
        }
       }}>
       Add Money
      </Button>
       </Box>
   
      
    
          </Box>
          <Box>
         <Box sx={{position:"relative"}}> <Image src="/card.png" width={293} height={171} ></Image>
         
         <Box sx={{position:"absolute", top:"0", marginX:"23px", marginY:"19px"}}>
         <Box gap={7} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
         <Typography
         sx={{
          fontSize:"17px",
          fontWeight:"600",
          lineHeight:"150%",
          color:"white"
         }}
         >Primary card</Typography>
         <Box sx={{backgroundColor:"white", width:"93px", 
         height:"45px", 
         borderRadius:"20px", 
         display:"flex", 
         alignItems:"center", 
         justifyContent:"center",
         paddingX:"15px",
         paddingY:"8px"
         }}>
          <Image src="/card-logo.png" width={64} height={30} ></Image></Box>
         </Box>
         <Typography sx={{color:"white", textDecoration:"underline", fontSize:"16px", fontWeight:"400", lineHeight:"150%"}}>see all card</Typography>
         <Typography sx={{color:"white", fontSize:"21px", fontWeight:"400", lineHeight:"150%", marginTop:"12px", letterSpacing:"1.9px"}}>3452 2345 6785 34256</Typography>
         <Box gap={11} sx={{display:"flex", color:"white"}}>
          <Typography>Kalu Comfort</Typography>
          <Typography>12/2024</Typography>
         </Box>
         </Box>
         </Box>
         
          </Box>
        </Stack>
        <Box  sx={{border:"1px solid  #D9D9D9",
         borderRadius:"10px",
         paddingY:"10px",
          paddingX:"10px"
      }}>
      
     <BarChart/>
   
        </Box>
      </Box>
    
        <Box direction="row" sx={{border:"1px solid  #D9D9D9",
         borderRadius:"10px",
        paddingY:"22px",
         paddingX:"24px",
         marginTop:"57px"
         }}>
          <Box sx={{display:"flex", justifyContent:"space-between", }}>
          <Box>
            <Typography sx={{fontSize:"16px", fontWeight:"600", color:"#283545", lineHeight:"150%"}}>Transaction History</Typography>
            <Typography  sx={{fontSize:"16px", fontWeight:"400", color:"#9B9797", lineHeight:"150%"}}>Track your Transactions</Typography>
          </Box>
          <SearchTextField
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon sx={{marginRight:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75ZM22 22.751C21.81 22.751 21.62 22.681 21.47 22.531L19.47 20.531C19.3305 20.3899 19.2523 20.1994 19.2523 20.001C19.2523 19.8026 19.3305 19.6121 19.47 19.471C19.76 19.181 20.24 19.181 20.53 19.471L22.53 21.471C22.82 21.761 22.82 22.241 22.53 22.531C22.38 22.681 22.19 22.751 22 22.751Z" fill="#9B9797"/>
</svg></SvgIcon>
              </InputAdornment>
            ),
          }}
        
        required
     
        defaultValue="Search a transaction"
        id="validation-outlined-input"
      />
      </Box>

      <Divider/>
      <Box>
        <Button sx={{width:"149px", height:"44px", border:"1.5px solid #0CB486", borderRadius:"5px", fontSize:"18px", fontWeight:"600", marginY:"23px"}}>
          <SvgIcon sx={{marginRight:"12px"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8 12H16M12 16V8M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#0CB486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></SvgIcon>
        Add Filter
          </Button></Box>    
<BasicTable/>

         </Box>
      
      </DashContainer>
      
        </>
    )
    
}
export default DashBody;