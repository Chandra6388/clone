import React from 'react';
import LoginDialog from './Account/LoginDialog';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../Contest/AccountProvider';
import ChatDialog from '../Component/Chat/ChatDialog'

const LoginHeader = styled(AppBar)`
height : 230px;
background-color: #00bfa5;
box-shadow: none;
`

const Header = styled(AppBar)`
height : 120px;
background-color: #00bfa5;
box-shadow: none;
`

const Components = styled(Box)`
height:100vh;
background: #dcdcdc;
`

function Messenger() {

    const { account } = useContext(AccountContext);
    return (
        <Components>
            {account ? <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog />
            </>

                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }

        </Components>
    );
}

export default Messenger;
