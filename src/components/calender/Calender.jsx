import React, { useState } from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Box, Typography, IconButton, Dialog, Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const events = {
  "2024-01-15": ["Report", "Meeting"],
  "2024-01-22": ["Visit"],
  "2024-01-29": ["Check", "Meeting"],
};
const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [eventText, setEventText] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };
  const handleSaveEvent = () => {
    const formattedDate = selectedDate.format("YYYY-MM-DD");
    if (!events[formattedDate]) events[formattedDate] = [];
    events[formattedDate].push(eventText);
    setEventText("");
    setEditDialogOpen(false);
  };
  return (
    <div>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2,
         backgroundColor: "#f9f9f9" ,
         color: "#0086A7"
         }}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={handleDateChange}
          renderDay={(day, _value, DayComponentProps) => {
            const formattedDate = day.format("YYYY-MM-DD");
            const dayEvents = events[formattedDate] || [];

            return (
              <Box
                sx={{
                  position: "relative",
                  "& .event-dot": {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#0086A7",
                    display: "inline-block",
                    mr: 0.5,
                  },
                }}
              >
                {/* <div {...DayComponentProps} /> */}
                {/* {dayEvents.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      position: "absolute",
                      bottom: 4,
                      left: 0,
                      right: 0,
                    }}
                  >
                    {dayEvents.map((_, idx) => (
                      <span key={idx} className="event-dot"></span>
                    ))}
                  </Box>
                )} */}
              </Box>
            );
          }}
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* <Typography variant="body2">
            {selectedDate.format("MMMM DD, YYYY")} Events:{" "}
            {events[selectedDate.format("YYYY-MM-DD")]?.join(", ") || "None"}
          </Typography> */}
          {/* <IconButton size="small" onClick={handleEditClick}>
            <EditIcon />
          </IconButton> */}
        </Box>
      </Box>

      {/* Edit Event Dialog */}
      {/* <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Add Event
          </Typography>
          <TextField
            label="Event"
            fullWidth
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleSaveEvent}>
            Save
          </Button>
        </Box>
      </Dialog> */}
    </LocalizationProvider>
    </div>
  )
}

export default Calender