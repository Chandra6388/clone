import React from 'react';
import { Box, Typography, styled } from '@mui/material'
import { emptyChatImage } from '../../../Assests/Data'


const Component = styled(Box)`
background : #f8f9fa;
height:100%;
`

const Container= styled(Box)`
display: flex;
flex-direction:column;
align-items:center;
`

const Image = styled('img')({
  width:400,
  marginTop:100
})

const Title = styled(Typography)`
font-size:32px;
margin:25px 0 10px 0;
font-family:inherit;
font-weight:300;
`
const SubTitle=styled(Typography)`
font-size:14px;
color:#667781;
font-family:inherit;
font-weight:400;
`

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt='Empty Chat' />
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and receive message without keeping your phone online</SubTitle>
        <SubTitle>Use WhatsApp on up to 4 linked device and 1 phone at same time</SubTitle>
      </Container>
    </Component>
  );
}

export default EmptyChat;
