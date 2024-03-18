import { Box, Drawer, Typography, styled } from '@mui/material'
import React from 'react';
import { MoveLeft } from 'lucide-react';
import Profile from './Profile';

const Header = styled(Box)`
background: #008069;
height:107px;
color:#FFFFFF;
display:flex;
gap:30px;

`
const ProfileComponent = styled(Box)`
background:#ededed;
height:81.5%
`

const InfoDrawer = ({ open, setOpen }) => {
  const dialogStyle = {
    left: '12px',
    top: '14px',
    width: '500px',
    height: '95%',
    boxShadow: 'none'
  }


  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: dialogStyle }}
      style={{ zIndex: 2000 }}
    >
     <Header>
      <MoveLeft onClick={()=>setOpen(false)} style={{margin:'65px 0 0 25px', fontWeight: 'bold', fontSize:'20px'}}/>
      <Typography  style={{margin:'63px 0 0 0', fontWeight: '500' , fontSize:'20px'}}>Profile</Typography>
     </Header>
     <ProfileComponent>
      <Profile/>
     </ProfileComponent>

   
    </Drawer>
   
  );
}

export default InfoDrawer;
