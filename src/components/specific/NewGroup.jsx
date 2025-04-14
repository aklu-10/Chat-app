import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import useInputValidation from '../../hooks/useInputValidation'

const NewGroup = () => {

  const groupName = useInputValidation('');

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers(pre=>pre.includes(id) ? pre.filter(i=>i !== id) : [...pre, id])
  }

  const submitHandler = () => {}

  const closeHandler = () => {}

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: '1rem', sm: '3rem' }} width={'25rem'} spacing={'2rem'}>
        <DialogTitle textAlign={'center'} variant='h4'>New Group</DialogTitle>

        <TextField
          label='Group Name'
          size='small'
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant='body1'>Members</Typography>

        <Stack>
          {
            sampleUsers.map((i) => (
              <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
            ))
          }
        </Stack>

        <Stack direction={'row'} justifyContent={'space-evenly'}>
          <Button color='error  ' variant='outlined'>Cancel</Button>
          <Button variant='contained' onClick={submitHandler}>Create</Button>
        </Stack>

      </Stack>
    </Dialog>
  )
}

export default NewGroup