import React , { useState } from 'react';
import { Box, styled } from '@mui/material'
import Footer from './Footer';
import { useContext } from 'react';
import { AccountContext } from '../../../Contest/AccountProvider';
import { newMessage } from '../../../server/App'

const Wrapper = styled(Box)`
background-image: url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`});
background-size:50%

`
const Component = styled(Box)`
height:77.5vh;
overflow-y:scroll;
`

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState('');
  const { account } = useContext(AccountContext)

  const sendText = async(e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }
      await newMessage(message);
      setValue('');
    }
  }
  
  return (
    <Wrapper>
      <Component>
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value= {value}
      />
    </Wrapper>
  );
}

export default Messages;
