import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import React, { lazy, Suspense, useState } from 'react';
import { orange } from '../../constants/color';
import { Add, Group, Logout, Menu, Notifications, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchDialog = lazy(()=>import('../specific/Search'));
const NotificationDialog = lazy(()=>import('../specific/Notifications'));
const NewGroupDialog = lazy(()=>import('../specific/NewGroup'));

const Header = () => {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile(pre=>!pre);
  }

  const openSearchDialog = () => {
    setIsSearch(pre=>!pre);
  }

  const openNewGroup = () => {
    setIsNewGroup(pre=>!pre);
  }

  const openNotification = () => {
    setIsNotification(pre=>!pre);
  }

  const navigateToGroup = () => navigate('/groups')

  const logoutHandler = () => {}

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={'4rem'}>
        <AppBar
          position='static'
          sx={{
            backgroundColor: orange
          }}
        >
          <Toolbar>
            <Typography
              variant='h6'
              sx={{
                display: { xs: 'none', sm: 'block' }
              }}
            >
              CHITCHAT
            </Typography>

            <Box
              sx={{
                display: { xs: 'block', sm: 'none' }
              }}
            >
              <IconButton color='inherit' onClick={handleMobile}>
                <Menu />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>

              <IconBtn icon={<Search/>} title={'Search'} clickHandler={openSearchDialog}/>
              {/* <Tooltip title='Search'>
                <IconButton
                  color='inherit'
                  size='large'
                  onClick={openSearchDialog}
                >
                  <Search />
                </IconButton>
              </Tooltip> */}

              <IconBtn icon={<Add/>} title={'New Group'} clickHandler={openNewGroup}/>

              {/* <Tooltip title='New Group'>
                <IconButton color='inherit' size='large' onClick={openNewGroup}>
                  <Add />
                </IconButton>
              </Tooltip> */}

              <IconBtn icon={<Group/>} title={'Manage Groups'} clickHandler={navigateToGroup}/>

              {/* <Tooltip title='Manage Groups'>
                <IconButton
                  color='inherit'
                  size='large'
                  onClick={navigateToGroup}
                >
                  <Group />
                </IconButton>
              </Tooltip> */}

              <IconBtn icon={<Notifications/>} title={'Notifications'} clickHandler={openNotification}/>


              <IconBtn icon={<Logout/>} title={'Logout'} clickHandler={logoutHandler}/>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    
      {
        isSearch && (
          <Suspense fallback={<Backdrop open/>}>
            <SearchDialog/>
          </Suspense>
      )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open/>}>
            <NotificationDialog/>
          </Suspense>
      )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open/>}>
            <NewGroupDialog/>
          </Suspense>
      )
      }
    </>

  )
}

const IconBtn = ({title, icon, clickHandler}) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={clickHandler}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header
