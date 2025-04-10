import { AlternateEmail } from '@mui/icons-material'
import { Avatar, Stack, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'

const Profile = () => {
  return (
    <Stack spacing={'2rem'} alignItems={'center'}>

        <Avatar
            sx={{
                width: 200,
                height: 200,
                objectFit: 'contain',
                marginBottom: '1rem',
                border: '5px solid white'
            }}
        />

        <ProfileCard heading={'Bio'} text={'lorem ipsumds jas daj jashd ajkhs dkajh sd'}/>

        <ProfileCard heading={'Username'} text={'aklu-1024'} Icon={<AlternateEmail/>}/>

        <ProfileCard heading={'Name'} text={'Akash Kumar'}/>

        <ProfileCard heading={'Joined'} text={moment('2024-03-04T00:00:00.000Z').fromNow()}/>

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
        {Icon && Icon}

        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color='gray' variant='caption'>{heading}</Typography>
        </Stack>

    </Stack>
)

export default Profile