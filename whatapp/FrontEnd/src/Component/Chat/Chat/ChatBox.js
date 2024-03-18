import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext } from 'react';
import { AccountContext } from '../../../Contest/AccountProvider';
import { getConversationDetails } from '../../../server/App'



const ChatBox = () => {
  const [conversation, setConversation] = useState({});
  const { person, account } = useContext(AccountContext);


  const getConversation = async () => {
    const data = await getConversationDetails({ senderId: account.sub, reciverId: person.sub })
    setConversation(data)
  }

  useEffect(() => {
    getConversation();
  }, [person.sub])


  return (
    <Box style={{ height: '70%' }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation = {conversation} />
    </Box>
  );
}

export default ChatBox;
