import React from 'react';
import { Search } from 'lucide-react';
import { Box, InputBase, styled } from '@mui/material';

const Component = styled(Box)`
background: #fff;
height:45px;
border-bottom: 1px solid #F2F2F2;
display:flex;
align-items:center;

`

const Warpper = styled(Box)`
background-color:#f0f2f5;
position:relative;
margin: 0 13px;
width:100%;
border-radius:10px
`
const Icons = styled(Box)`
position:absolute;
height:100%;
padding:0 0 0 8px;
color:#919191;
display:flex;
align-items:center;



`

const InputFilds = styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px;



`
const SearchBox = ({setText}) => {
    return (
        <Component>
            <Warpper>
                <Icons>
                    <Search />
                </Icons>
                <InputFilds
                placeholder='Search or start new chat' 
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                />

            </Warpper>

        </Component>
    );
}

export default SearchBox;
