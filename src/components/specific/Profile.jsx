import { AlternateEmail, CalendarMonth, Face } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={'2rem'} alignItems={'center'}>
      <Avatar
        sx={{
          width: '10rem',
          height: '10rem',
          objectFit: 'contain',
          marginBottom:'1rem',
          border: '5px solid #fff',
        }}
      />
      <ProfileCard heading={'Bio'} text={'lorem ipsum dolor sit amet'} />

      <ProfileCard heading={'Username'} text={'meabhisingh'} Icon={<AlternateEmail/>}/>

      <ProfileCard heading={'Name'} text={'Abhishek Nahar Singh'} Icon={<Face/>}/>

      <ProfileCard heading={'Joined'} text={moment('2023-02-20T00:00:00.000Z').fromNow()} Icon={<CalendarMonth/>}/>

    </Stack>
  )
}

const ProfileCard = ({text, Icon, heading}) => (
  <Stack 
    direction={'row'} 
    alignItems={'center'}
    spacing={'1rem'}
    color={'white'}
    textAlign={'center'}
  >
    {
      Icon && Icon
    }

    <Stack>
      <Typography variant='body1'>{text}</Typography>
      <Typography variant='caption' color='gray'>{heading}</Typography>

    </Stack>
  </Stack>
)

export default Profile