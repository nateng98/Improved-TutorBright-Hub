import FullCalendar from "@fullcalendar/react";
import { formatRange } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { mockDataPastSessions } from "../../data/mockData";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import React, { useState } from "react";

const Calendar = () => {
	const theme = useTheme();
  const colors = tokens(theme.palette.mode);
	const [currentAvail, setCurrentAvail] = useState([]);

  const handleDateClick = (selected) => {
    const title = confirm("Please confirm your availability"); // will change to a nicer popup window
    const calendarApi = selected.view.calendar;
		
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        start: selected.startStr,
        end: selected.endStr,
				backgroundColor: 'rgba(200,200,255, 0.3)'
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[150]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Incoming session</Typography>
          <List>
            {mockDataPastSessions.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.yellowAccent[400],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  sx={{ color: theme.palette.mode === 'dark' ? 'black' : 'white'}}
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatRange(event.start, event.end, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
												hour: '2-digit',
												minute: '2-digit',
												separator: ' - ',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek",
            }}
            initialView="dayGridMonth"
            editable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentAvail(events)}
            initialEvents={mockDataPastSessions}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Calendar;
