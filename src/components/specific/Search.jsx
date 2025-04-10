import React, { useState } from 'react'
import useInputValidation from '../../hooks/useInputValidation'
import { Search as SearchIcon } from '@mui/icons-material'
import { Dialog, DialogTitle, InputAdornment, List, ListItemText, Stack, TextField } from '@mui/material'
import UserItem from '../shared/UserItem';
import { sampleusers } from '../../constants/sampleData';


const Search = () => {
  const search = useInputValidation('')

  const isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState(sampleusers);

  const addFriendHandler = () => {};  

  return (
    <Dialog open>
      <Stack p={'2rem'} width={'25rem'}>
        <DialogTitle textAlign={'center'}>Find People</DialogTitle>

        <TextField
          label=''
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                  <SearchIcon/>
              </InputAdornment>
            )
          }}
        />

        <List>
          {
            users.map((user, index)=>(
              <UserItem key={index} user={user} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>
            ))
          }
        </List>

      </Stack>
    </Dialog>
  )
}

export default Search
