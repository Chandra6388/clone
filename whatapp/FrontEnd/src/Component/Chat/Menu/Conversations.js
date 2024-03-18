import React from 'react';
import { Box, Typography, styled } from '@mui/material'
import { useContext } from 'react';
import { AccountContext } from '../../../Contest/AccountProvider';
import {setConversation} from '../../../server/App'

const Component = styled(Box)`
display:flex;
height:60px;
${'' /* padding: 13px 0 0 20px; */}
cursor: pointer;

`

const Image = styled('img')({
    height: 50,
    width: 50,
    borderRadius: '50%',


})
const ImageComponent = styled(Box)`
display:flex;
justify-content: center;
align-items:center;
margin:0 0 0 15px
`
const ComponentItems = styled(Box)`
display:flex;
justify-content: center;
align-items:center;
margin:0 0 0 15px
`

const Conversations = ({ user }) => {
    const {setPerson, account} = useContext(AccountContext)

    const getUser= async()=>{
        setPerson(user);
        await setConversation({senderId: account.sub, receiverId: user.sub})
    }
    return (
        <Component onClick={()=>getUser()}>
            <ImageComponent>
                <Image src={user.picture} alt="" />
            </ImageComponent>
            <ComponentItems>
                <Typography>{user.name}</Typography>
            </ComponentItems>

        </Component>
    );
}

export default Conversations;
