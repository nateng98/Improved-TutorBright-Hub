import React, { useContext, useState } from 'react'
import { Box, Menu, MenuItem, Tooltip, Avatar, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, useMode, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'
 
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // open Account Menu
  const [anchorE1, setAnchorEl] = useState(null);
  const open = Boolean(anchorE1);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    // css can be implemented directly on to <Box>
    <Box display='flex' alignItems='center' justifyContent='space-between' p={2}>
      {/* search bar */}
      <Box 
        display='flex'
        borderRadius='10px'
        border={2}
        height={50}
      >
        {/* Search box */}
        {/* unlike <Box>, css is implemented in sx={{ }} */}
        <InputBase sx={{ ml: 2, flex: 1}} placeholder='Search'/>
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon sx={{ width: 32, height: 32 }}/ >
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display='flex' gap={1}>
          <Tooltip title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon sx={{ width: 32, height: 32 }}/> : <DarkModeOutlinedIcon sx={{ width: 32, height: 32 }}/>}
            </IconButton>
          </Tooltip>
          <Tooltip title='Notification'>
            <IconButton>
              <NotificationsOutlinedIcon sx={{ width: 32, height: 32 }}/>
            </IconButton>
          </Tooltip> 
          {/* Account */}
          <Tooltip title='Account settings'>
            <IconButton 
              onClick={handleClickMenu}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
            </IconButton>
          </Tooltip>
      </Box>
      {/* Drop menu for account setting button */}
      <Menu
        anchorEl={anchorE1}
        id='account-menu' 
        open={open}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1,
              borderRadius: '10px',
              bgColor: `white`,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 19,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMenu} sx={{gap: 1}}>
          <PersonOutlinedIcon/> My Account
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{gap: 1}}>
          <SettingsOutlinedIcon/> Setting
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{gap: 1}}>
          <LogoutIcon/> Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Topbar