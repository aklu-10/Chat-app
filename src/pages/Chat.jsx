import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { gray, orange } from '../constants/color';
import { AttachFile, Send } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponent';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessages } from '../constants/sampleData';
import Message from '../components/shared/Message';

const user = {
  _id: '12345',
  name: 'John Doe',
}

const Chat = () => {

  const containerRef = useRef(null);
  const fileMenuRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        spacing={'1rem'}
        sx={{
          boxSizing: 'border-box',
          padding: '1rem',
          bgcolor: 'lightgray',
          height: '90%',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        
        {
          sampleMessages?.map(i=>(
            <Message key={i._id} message={i} user={user}/>
          ))
        }

      </Stack>

      <form
        style={{
          height: '10%'
        }}
      >

        <Stack
          direction={'row'} 
          height={'100%'} 
          alignItems={'center'}
          padding={'1rem'}
          sx={{
            position: 'relative'
          }}
        >
          <IconButton 
            sx={{
              position: 'absolute',
              left: '1.5rem',
              rotate: '30deg'
            }}
          >
            <AttachFile />
          </IconButton>

          <InputBox placeholder='Type message...' />

          <IconButton
            type='submit'
            sx={{
              background: orange,
              color: 'white',
              marginLeft: '1rem',
              padding: '0.5rem',
              '&:hover': {
                bgcolor: 'error.dark'
              }
            }}
          >
            <Send />
          </IconButton>


        </Stack>


      </form>

      <FileMenu />

    </>
  )
}

export default AppLayout()(Chat);