import React from 'react'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import Header from './Header'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../../constants/sampleData'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const AppLayout = () => WrapperComponent => {
  return props => {

    const {chatId} = useParams();

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log(_id, groupChat);
    }


    return (
      <>
        <Title />

        <Header/>

        <Grid container height={'calc(100vh - 4rem)'}>

          <Grid
            size={{ sm: 4, md: 3 }}
            sx={{
              height: '100%',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <ChatList 
              chats={sampleChats} 
              chatId={chatId} 
              newMessagesAlert={[
                {
                  chatId,
                  count: 4
                }
              ]}
              onlineUsers={['1', '2']}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
            sx={{ height: '100%' }}
            bgcolor={'primary.main'}
          >
            <WrapperComponent {...props} />
          </Grid>

          <Grid
            size={{ md: 4, lg: 3 }}
            sx={{
              height: '100%',
              display: { xs: 'none', md: 'block' },
              padding: '2rem',
              bgcolor: 'rgba(0, 0, 0, .85)'
            }}
          >
            <Profile/>
          </Grid>

        </Grid>
      </>
    )
  }
}

export default AppLayout
