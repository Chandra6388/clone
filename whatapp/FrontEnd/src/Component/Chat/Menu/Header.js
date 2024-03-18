import React from 'react';
import { useContext,useState } from 'react';
import { AccountContext } from '../../../Contest/AccountProvider';
import { Box, styled } from '@mui/material';
import { CircleDashed, MessageSquareText } from 'lucide-react';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';

const Component = styled(Box)`
display: flex;
justify-content: space-between;
height: 40px;
background: #ededed;
padding : 8px 16px;
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const RightComponent = styled(Box)`
display: flex;
gap:25px;
align-items: center;
`



const Header = () => {
    const [openDrawer,setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);
    const handleDrawer = ()=>{
        setOpenDrawer(true)
     }


    return (
        <>
            <Component>
                <Image src={account.picture} alt="User Profile"  onClick={handleDrawer}/>
                <RightComponent>
                    <CircleDashed />
                    <MessageSquareText />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </RightComponent>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>

        </>
    );
}

export default Header;
