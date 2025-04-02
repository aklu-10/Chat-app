import React from 'react'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import Header from './Header'
import ChatList from '../specific/ChatList'
import { samplechats } from '../../constants/sampleData'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const AppLayout = () => WrapperComponent => {
  return props => {

    const params = useParams();
    const chatId = params.chatId;


    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("E", e, _id, groupChat)
    }

    return (
      <>
        <Title />

        <Header />

        <Grid container height={'calc(100vh - 4rem)'}>
          <Grid
            size={{ sm: 4, md: 3 }}
            sx={{
              height: '100%',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            {/* First */}
            {/* <ChatList chats={[1, 2, 3, 4, 5]}/> */}
            {/* <ChatList
              chats={samplechats}
              chatId={chatId}
              newMessagesAlert={[
                {
                  chatId,
                  count: 4
                }
              ]}
              onlineUsers={["123456", "67890"]}
            /> */}
             <ChatList
              chats={samplechats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
            sx={{ height: '100%' }}
            // bgcolor={'primary.main'}
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
            {/* Third */}
            <Profile/>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default AppLayout
