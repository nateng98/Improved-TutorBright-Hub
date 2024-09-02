import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, Avatar, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SideMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("DashBoard");

  return (
    <Box
      sx={{
        background: `${colors.primary[200]} !important`,
        margin: '15px 5px 15px 15px',
        borderRadius: '20px'
      }}
    >
      <Sidebar
        backgroundColor="transparent"
        width="300px"
        style={{
          border: "none",
        }}

      >
        <Menu iconShape="square">
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            style={{
              margin: "20px 40px 40px 20px",
              color: colors.grey[100],
            }}
          >
            <Typography variant="h3" color={colors.grey[100]}>
              TutorBright
            </Typography>
          </Box>
          {/* Avatar */}
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar sx={{ width: 100, height: 100 }}>
                <Typography variant="h1">A</Typography>
              </Avatar>
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px" }}
              >
                Nathan Nguyen
              </Typography>
              <Typography variant="h5" color={colors.yellowAccent[400]}>
                Tutor
              </Typography>
            </Box>
          </Box>
          <Box paddingLeft="10%">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon sx={{ width: 32, height: 32 }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Calendar
            </Typography>
            <Item
              title="Sessions"
              to="/sessions"
              icon={<AccessTimeIcon sx={{ width: 32, height: 32 }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={
                <CalendarTodayOutlinedIcon sx={{ width: 32, height: 32 }} />
              }
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Students
            </Typography>
            <Item
              title="Profiles"
              to="/students"
              icon={<PeopleOutlinedIcon sx={{ width: 32, height: 32 }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon sx={{ width: 32, height: 32 }} />}
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
              icon={<TimelineOutlinedIcon sx={{ width: 32, height: 32 }} />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

const Item = ({ title, to, icon, selected, setSelected }) => {
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
        "& .ps-menu-button:hover": {
          backgroundColor: "transparent !important",
        },
      }}
      component={<Link to={to} />} // add Link as component to prevent nested anchor tags, which causes error
    >
      <Typography variant="h5">{title}</Typography>
    </MenuItem>
  );
};

export default SideMenu;
