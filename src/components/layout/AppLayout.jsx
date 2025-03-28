import React from 'react'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import Header from './Header'

const AppLayout = () => WrapperComponent => {
  return props => {
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
            First
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
            Third
          </Grid>

        </Grid>
      </>
    )
  }
}

export default AppLayout
