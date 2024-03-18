import React, { useState } from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import Search from './SearchBox';
import Converssion from './Converssion';

const Menu = () => {

  const [text,setText] = useState('');
  return (
    <Box>
      <Header/>
      <Search setText={setText}/>
      <Converssion text = {text}/>
    </Box>
  );
}

export default Menu;
