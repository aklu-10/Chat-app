import { CameraAlt } from '@mui/icons-material';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHidden } from '../components/styles/StyledComponent';
import useInputValidation from '../hooks/useInputValidation';
import useFileInput from '../hooks/useFileInput';

const Login = () => {
  
  const [isLogin, setIsLogin] = useState(true)

  const name = useInputValidation('');
  const bio = useInputValidation('');
  const username = useInputValidation('');
  const password = useInputValidation('');
  const avatar = useFileInput();


  const toggleLogin = () => setIsLogin(pre=>!pre);

  return (
    <Container
      component={'main'}
      maxWidth='xs'
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4
        }}
      >
        {isLogin ? (
          <>
            <Typography variant='h5'>Login</Typography>

            <form
              style={{
                width: '100%',
                marginTop: '1rem'
              }}
            >
              <TextField
                required
                fullWidth
                label='Username'
                variant='outlined'
                margin='normal'
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                type='password'
                label='Password'
                variant='outlined'
                margin='normal'
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                fullWidth
                variant='contained'
                color='primary'
                type='submit'
                sx={{ mt: '1rem' }}
              >
                Login
              </Button>

              <Typography textAlign={'center'} m={'1rem'}>
                OR
              </Typography>

              <Button fullWidth variant='outlined' onClick={toggleLogin}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant='h5'>Sign Up</Typography>

            <form
              style={{
                width: '100%',
                marginTop: '1rem'
              }}
            >

              <Stack position={'relative'} width={'10rem'} margin={'auto'} >
                <Avatar sx={{
                  width: '10rem',
                  height: '10rem',
                  objectFit: 'contain'
                }}
                src={avatar.preview}
                />

                <IconButton sx={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                  }}
                  component='label'
                >
                  <>
                    <CameraAlt/>
                    <VisuallyHidden type='file' onChange={avatar.changeHandler}/>
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label='Name'
                variant='outlined'
                margin='normal'
                value={name.value}
                onChange={name.changeHandler}
              />

              <TextField
                required
                fullWidth
                label='Bio'
                variant='outlined'
                margin='normal'
                value={bio.value}
                onChange={bio.changeHandler}
              />

              <TextField
                required
                fullWidth
                label='Username'
                variant='outlined'
                margin='normal'
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                type='password'
                label='Password'
                variant='outlined'
                margin='normal'
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                fullWidth
                variant='contained'
                color='primary'
                type='submit'
                sx={{ mt: '1rem' }}
              >
                Sign Up
              </Button>

              <Typography textAlign={'center'} m={'1rem'}>
                OR
              </Typography>

              <Button fullWidth variant='outlined' onClick={toggleLogin}>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  )
}

export default Login
