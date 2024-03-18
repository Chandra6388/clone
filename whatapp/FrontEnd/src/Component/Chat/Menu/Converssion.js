import React, { useEffect, useState ,useContext} from 'react';
import {getAllUsers} from '../../../server/App'
import {Box,styled,Divider} from '@mui/material'
import Conversations from './Conversations';
import { AccountContext } from '../../../Contest/AccountProvider';


const Component = styled(Box)`
height:75vh;
overflow: overlay;
`

const Converssion = ({text}) => {
const [getUser, setGetUsers]=useState([]);


  const findData=async()=>{
    let response = await  getAllUsers();
    const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));

    setGetUsers(filteredData)
   }
useEffect(()=>{
  findData();
},[text])

const { account } = useContext(AccountContext);


  return (
     
    <Component>
    {
      getUser.map((items) => {
        return items.sub !== account.sub ? 
        <>
        <Conversations user={items} />
        <Divider style={{margin:"0 0 0 83px", backgroundColor:'#e9edef', opacity:'0.6'}}/>
        </>
        
         : "";
      })
    }
  </Component>
  );
}

export default Converssion;
