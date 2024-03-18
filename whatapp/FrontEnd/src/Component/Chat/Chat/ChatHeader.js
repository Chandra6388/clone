import React from 'react';
import { Box, Typography, styled } from '@mui/material'
import { Search, EllipsisVertical } from 'lucide-react'

const Header= styled(Box)`
height:40px;
padding : 8px 16px;
background-color:#ededed;
display:flex;
align-items:center;
`

const Image=styled('img')({
    height:40,
    width:40,
    objectFit :'cover',
    borderRadius:'50%'
})

const Name = styled(Typography)`
margin-left:12px !important;
`
const OnlineStatuse = styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgb(0,0,0,0.6)
`
const RightComponent= styled(Box)`
margin-left:auto
`

const ChatHeader = ({person}) => {
    return (
        <Header>
            <Image src={person.picture} alt='dp' />
            <Box>
                <Name>{person.name}</Name>
                <OnlineStatuse>Online</OnlineStatuse>
            </Box>
            <RightComponent>
                <Search style={{padding:'8px' }} />
                <EllipsisVertical  style={{padding:'8px' }}  />
            </RightComponent>
        </Header>
    );
}

export default ChatHeader;
