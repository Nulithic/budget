import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import { Box, Button, Grid, Paper, Stack, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import { useGlobalEvent } from "beautiful-react-hooks";

import {
  createDaysForCurrentMonth,
  createDaysForNextMonth,
  createDaysForPreviousMonth,
  isWeekendDay,
  getMonthDropdownOptions,
  getYearDropdownOptions,
} from "./helpers";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
}));

export default function Calendar({ yearAndMonth = [2021, 6], onYearAndMonthChange, renderDay = () => null, renderStats = () => null }) {
  const [windowHeight, setWindowHeight] = useState(0);
  const onWindowResize = useGlobalEvent("resize");

  onWindowResize(() => {
    setWindowHeight(window.innerHeight);
  });

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const [year, month] = yearAndMonth;

  let currentMonthDays = createDaysForCurrentMonth(year, month);
  let previousMonthDays = createDaysForPreviousMonth(year, month, currentMonthDays);
  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays);
  let calendarGridDayObjects = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

  const handleMonthNavBackButtonClick = () => {
    let nextYear = year;
    let nextMonth = month - 1;
    if (nextMonth === 0) {
      nextMonth = 12;
      nextYear = year - 1;
    }
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleMonthNavForwardButtonClick = () => {
    let nextYear = year;
    let nextMonth = month + 1;
    if (nextMonth === 13) {
      nextMonth = 1;
      nextYear = year + 1;
    }
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleMonthSelect = (evt) => {
    let nextYear = year;
    let nextMonth = parseInt(evt.target.value, 10);
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleYearSelect = (evt) => {
    let nextMonth = month;
    let nextYear = parseInt(evt.target.value, 10);
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Stack>
        <Item sx={{ marginBottom: 1, height: 54 }}>
          <Grid container spacing={1}>
            <Grid item xs={8} alignSelf="center">
              <Stack direction="row" spacing={1}>
                <Typography>Stats</Typography>
                <Typography>Stats</Typography>
                <Typography>Stats</Typography>
              </Stack>
            </Grid>
            <Grid item xs={4} alignSelf="center">
              <Stack direction="row" spacing={1} justifyContent="flex-end">
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Month</InputLabel>
                  <Select value={month} label="Month" onChange={handleMonthSelect}>
                    {getMonthDropdownOptions().map(({ label, value }) => (
                      <MenuItem value={value} key={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Year</InputLabel>
                  <Select value={year} label="Year" onChange={handleYearSelect}>
                    {getYearDropdownOptions(year).map(({ label, value }) => (
                      <MenuItem value={value} key={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button variant="contained" onClick={handleMonthNavBackButtonClick}>
                  Prev
                </Button>
                <Button variant="contained" onClick={handleMonthNavForwardButtonClick}>
                  Next
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Item>

        <Grid container spacing={1} columns={7} height={windowHeight - 118}>
          {calendarGridDayObjects.map((day) => (
            <Grid item xs={1} key={day.dateString}>
              <Item>{day.isCurrentMonth ? renderDay(day) : null}</Item>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
