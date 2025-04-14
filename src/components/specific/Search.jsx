import React, { useState } from 'react'
import useInputValidation from '../../hooks/useInputValidation';
import { sampleUsers } from '../../constants/sampleData';
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem';

const Search = () => {

  const [users, setUsers] = useState(sampleUsers);
  const search = useInputValidation('');

  const isLoadingSentFriendRequest = false;

  const addFriendHandler = (id) => {
    console.log({id})
  }

  return (
    <Dialog open>
      <Stack p={'2rem'} width={'25rem'}>

        <DialogTitle textAlign={'center'}>Find People</DialogTitle>

        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <List>
          {
            users.map((i)=>(
              <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSentFriendRequest}/>
            ))
          }
        </List>

      </Stack>
    </Dialog>
  )
}

export default Search