import React from 'react'
import AppLayout from '../components/layout/AppLayout';

const Chat = () => {
  const containerRef = useRef(null)

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={'border-box'}
        padding={'1rem'}
        spacing={'1rem'}
        bgcolor={gray}
        height={'90%'}
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        {/* Render Messages */}
      </Stack>

      <form
        style={{
          height: '10%'
        }}
      >
        <Stack 
          direction={'row'} 
          height={'100%'}
          padding={'1rem'}
          alignItems={'center'}
          position={'relative'}
        >
          
          <IconButton>
            <AttachFile />
          </IconButton>

          <InputBox placeholder='Type message here...'/>

          <IconButton type='submit' sx={{
            backgroundColor: orange,
            // color: 'white',
            marginLeft: '1rem',
            padding: '0.5rem',
            '&:hover': {
              bgcolor: 'error.dark'
            }
          }}>
            <Send />
          </IconButton>


        </Stack>
      </form>
    </>
  )
}

export default AppLayout()(Chat)
