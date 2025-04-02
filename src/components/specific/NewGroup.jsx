import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleusers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem';
import useInputValidation from '../../hooks/useInputValidation';

const NewGroup = () => {

  const groupName = useInputValidation('');

  const [members, setMembers] = useState(sampleusers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers(prev=> prev.includes(id) ? prev.filter(item=>item !== id) : [...prev, id])
  };

  const submitHandler = () => {};

  const closeHandler = () => {};

  // ALT + SHIFT + O -> remove unnecessary imports

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: '1rem', sm: '3rem' }} maxWidth={'25rem'} spacing={'2rem'}>
        
        <DialogTitle textAlign={'center'}>New Group</DialogTitle>

        <TextField 
          label='Group Name'
          value={groupName.value} 
          onChange={groupName.changeHandler}
        />

        <Typography variant='body1'>Members</Typography>

        <Stack>
          {members.map((user, index) => (
            <UserItem key={index} user={user} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)}/>
          ))}
        </Stack>

        <Stack direction={'row'} justifyContent={'space-evenly'}>
            <Button variant='outlined' color='error' size='large'>Cancel</Button>
            <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>
        </Stack>

      </Stack>
    </Dialog>
  )
}

export default NewGroup
