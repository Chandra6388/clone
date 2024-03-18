import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../Contest/AccountProvider';
import { Pencil } from 'lucide-react';


const ImageContainer = styled(Box)`
display:flex;
align-items:center;
justify-content: center;
height:180px;
`
const Image = styled('img')({
    height: '160px',
    borderRadius: '50%'
})

const NameComponent = styled(Box)`
background:white;
height:5.5rem;
`
const AboutComponent = styled(Box)`
background:white;
height:6rem;
`


const NameEditComponent = styled(Box)`
display:flex;
 
justify-content: space-between;
`

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>
            <NameComponent>
                <Typography style={{ padding: '1rem 0 0 1.5rem', color: '#008069' }}>Your Name</Typography>
                <Typography style={{ padding: '1rem 0 0 1.5rem', color: '#4a4a4a' }}>{account.name}</Typography>
            </NameComponent>
            <Box>
                <Typography style={{ padding: '.8rem 1.1rem .8rem 1.1rem', height:'60px' }}>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </Box>
            <AboutComponent>
                <Typography style={{ padding: '1rem 0 0 1.5rem', color: '#008069' }}>About</Typography>
                <Typography style={{ padding: '1rem 0 0 1.5rem', color: '#4a4a4a' }}>DREAMS DON'T WORK UNLESS YOU DO! 😊</Typography>
            </AboutComponent>
        </>
    );
}

export default Profile;
