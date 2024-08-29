import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar' 
import { Box, IconButton, Typography, Avatar, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const SideMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('DashBoard');

  return (
    <Box
      sx={{
        background: `${colors.primary[400]} !important`,
      }}
    >
      <Sidebar
        backgroundColor='transparent'
        width="300px"
        style={{
          border: 'none',
        }}
        collapsed={isCollapsed}
      >
        <Menu
          iconShape="square"
        >
          {/* Minimize bar */}
          <MenuItem
            // isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)
            onClick={() => (setIsCollapsed(!isCollapsed))}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            rootStyles={{
              '& .ps-menu-button:hover': {
                backgroundColor: 'transparent !important'
              }
            }}
          >
            {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    TutorBright
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
          </MenuItem>
          {/* Avatar */}
          {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar sx={{ width: 100, height: 100 }}>
                    <Typography variant='h1'>A</Typography>
                  </Avatar>
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px"}}
                  >
                    Nathan Nguyen
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Tutor
                  </Typography>
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Students"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

const Item = ({ title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      rootStyles={{
        '& .ps-menu-button:hover': {
          backgroundColor: 'transparent !important'
        }
      }}
      component={<Link to={to} />} // add Link as component to prevent nested anchor tags, which causes error
    >
      <Typography>
        {title}
      </Typography>
    </MenuItem>
  );
}

export default SideMenu