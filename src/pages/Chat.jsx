import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { gray } from '../constants/color';
import { AttachFile, Send } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponent';

const Chat = () => {

  const containerRef = useRef(null);

  return (
    <>
      <Stack 
        ref={containerRef}
        spacing={'1rem'}
        sx={{
          boxSizing: 'border-box',
          padding: '1rem',
          bgcolor: 'black',
          height: '90%',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        MESSAGES HERE
      </Stack>

      <form
        style={{
          height: '10%'
        }}
      >

        <Stack direction={'row'} height={'100%'}>
          <IconButton>
            <AttachFile/>
          </IconButton>

          <InputBox placeholder='Type message...'/>

          <IconButton type='submit'>
            <Send/>
          </IconButton>


        </Stack>


      </form>

    </>
  )
}

export default AppLayout()(Chat);