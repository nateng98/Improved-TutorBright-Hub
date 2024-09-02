import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {
  mockDataPastSessions,
  mockDataUpcomingSessions,
} from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import UpcomingIcon from '@mui/icons-material/Upcoming';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
import { formatRange } from "@fullcalendar/core";

const DashBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Quick Summary" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[150]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="2 Upcoming"
            subtitle="Upcoming Sessions This Month"
            progress="0.80"
            increase="80%"
            icon={
              <UpcomingIcon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[150]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="3 Unconfirmed"
            subtitle="Unconfirmed Sessions This Month"
            progress="0.60"
            increase="60%"
            icon={
              <RemoveDoneIcon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[150]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="10"
            subtitle="New Potential Students"
            progress="0"
            increase=""
            icon={
              <PersonAddIcon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[150]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px"
        >
          <StatBox
            title="601 Completed"
            subtitle="Completed Sessions All Time"
            progress="0"
            increase=""
            icon={
              <PersonAddIcon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[150]}
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Upcoming Tutor Sessions
            </Typography>
          </Box>
          {mockDataUpcomingSessions.map((session, i) => (
            <Box
              key={`${session.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.yellowAccent[400]}
                  variant="h5"
                  fontWeight="600"
                >
                  {session.title}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {formatRange(session.start, session.end, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    separator: " - ",
                  })}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{session.date}</Box>
              <Box
                backgroundColor={colors.redAccent[500]}
                p="5px"
                borderRadius="4px"
              >
                <Button sx={{ color: "white" }}>{"Cancel"}</Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[150]}
          overflow="auto"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`2px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Tutor Sessions
            </Typography>
          </Box>
          {mockDataPastSessions.map((session, i) => (
            <Box
              key={`${session.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.yellowAccent[400]}
                  variant="h5"
                  fontWeight="600"
                >
                  {session.title}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {formatRange(session.start, session.end, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    separator: " - ",
                  })}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{session.date}</Box>
              <Box
                backgroundColor={
                  session.confirm
                    ? colors.yellowAccent[400]
                    : colors.redAccent[500]
                }
                p="5px"
                borderRadius="4px"
              >
                <Button sx={{ color: "white" }}>
                  {session.confirm ? "Confirmed" : "Unconfirmed"}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[150]}
          borderRadius="10px"
        >
          <Box
            mt="25px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            padding="0 20px 0 20px"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Income Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.yellowAccent[400]}
              >
                $4,525
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.yellowAccent[400] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
