import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { samplenotifications } from '../../constants/sampleData'

const Notifications = () => {
  const friendRequestHandler = (_id, accept) => {}

  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'25rem'}>
        <DialogTitle>Notifications</DialogTitle>

        {samplenotifications.length > 0 ? (
          samplenotifications.map(i => (
            <NotificationItem
              key={i._id}
              sender={i.sender}
              _id={i._id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography textAlign={'center'}>0 notification</Typography>
        )}
      </Stack>
    </Dialog>
  )
}

const NotificationItem = memo(({ sender, _id, handler }) => {

  const {name, avatar} = sender;

  return (
    <ListItem>
      <Stack
        direction='row'
        spacing={'1rem'}
        alignItems={'center'}
        width={'100%'}
      >
        <Avatar src={avatar}/>

        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {`${name} sent you a friend request`}
        </Typography>

        <Stack direction={{
          xs:'column',
          sm: 'row'
        }}>
          <Button onClick={()=>handler({_id, accept: true})}>Accept</Button>
          <Button color='error' onClick={()=>handler({_id, accept: false})}>Reject</Button>
        </Stack>

      </Stack>
    </ListItem>
  )
})

export default Notifications
