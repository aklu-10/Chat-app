import { Grid, Skeleton, Stack } from '@mui/material'

export const LayoutLoader = () => {
  return (
    <Grid container height={'calc(100vh - 4rem)'} spacing={'1rem'}>
      <Grid
        size={{ sm: 4, md: 3 }}
        sx={{
          height: '100%',
          display: { xs: 'none', sm: 'block' }
        }}
      >
        <Skeleton variant='rectangular' height={'100vh'} />
      </Grid>

      <Grid size={{ xs: 12, sm: 8, md: 5, lg: 6 }} sx={{ height: '100%' }}>
        <Stack spacing={'1rem'}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant='rectangular' height={'5rem'} />
          ))}
        </Stack>
      </Grid>

      <Grid
        size={{ md: 4, lg: 3 }}
        sx={{
          height: '100%',
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Skeleton variant='rectangular' height={'100vh'} />
      </Grid>
    </Grid>
  )
}