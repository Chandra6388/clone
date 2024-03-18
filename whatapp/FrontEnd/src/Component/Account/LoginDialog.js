import React from 'react';
import { Box, Dialog, styled, Typography, List, ListItem } from '@mui/material';
import { qrCodeImage } from '../../Assests/Data'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode, InvalidTokenError } from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../Contest/AccountProvider';
import { AddUser } from '../../server/App';

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '65%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'none'
}

const Content = styled(Box)`
display : flex;
`
const Container = styled(Box)`
padding : 50px 0 0 50px;
`

const Items = styled(Typography)`
font-size:26px;
color : #525252;
font-weight: 300;
font-family: inherit;
margin : 0 0 20px 0;
`
const ImgContainer = styled('img')({
    height: 250,
    width: 250,
    margin: '50px 50px 0 30px'
})
const ListItems = styled(ListItem)`
margin : 10px 0 0 0;
color : #4a4a4a;
`




function LoginDialog() {
    const { setAccount } = useContext(AccountContext);
    const onLoginSuccess = async(res) => {
        const credentials = jwtDecode(res.credential)
        setAccount(credentials);
        await AddUser(credentials)

    }
    const onLoginError = (res) => {
        console.log("login fails", res)

    }
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Content>
                <Container>
                    <Items>Use WhatsApp on your computer</Items>
                    <List>
                        <ListItems>1. Open WhatsApp on your phone</ListItems>
                        <ListItems>2. Tap  on Android, or  on iPhone</ListItems>
                        <ListItems>3. Tap Linked devices  and then Link a device</ListItems>
                        <ListItems>4. Point your phone at this screen to capture the QR code</ListItems>
                    </List>
                </Container>
                <Box style={{ position: "relative" }}>
                    <ImgContainer src={qrCodeImage} alt="QR Code" />
                    <Box style={{ position: "absolute", top: '50%', transform: 'translate(35%)' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Content>
        </Dialog>
    );
}
export default LoginDialog;
