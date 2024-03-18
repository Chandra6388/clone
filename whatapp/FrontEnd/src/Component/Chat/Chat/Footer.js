import React from 'react';
import { Box, InputBase, styled } from '@mui/material';
import { Smile, Paperclip, Mic } from 'lucide-react'

const Container = styled(Box)`
height:49px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
`

const SearchBox = styled(Box)`
background-color:#FFFFFF;
border-radius:10px;
width:calc(94% - 100px);
`
const InputField = styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px
`

const Footer = ({ sendText, setValue , value }) => {

    return (
        <Container>
            <Smile style={{ margin: '0 10px' }} />
            <Paperclip style={{ margin: '0 10px' }} />
            <SearchBox>
                <InputField
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyUp={(e) => sendText(e)}
                    value={value}
                />

            </SearchBox>
            <Mic style={{ marginLeft: '10px' }} />
        </Container>
    );
}

export default Footer;
