import { useState } from "react";
import { Grid, Box, Button, Typography, IconButton, Stack } from "@mui/material";
import dayjs from "dayjs";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CalendarComponent from "../components/Calender";

import dbConnect from "../lib/dbConnect";
import StatementModel from "../models/statementModel";

const Calender = ({ statements }) => {
  const [yearAndMonth, setYearAndMonth] = useState([2022, 5]);

  const handleDay = (calendarDayObject) => {
    console.log(calendarDayObject);
  };
  console.log(statements);
  const CalendarDayFrame = ({ calendarDayObject }) => {
    return (
      <Stack spacing={3} sx={{ width: "100%" }}>
        <Stack spacing={1} direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{`${dayjs(calendarDayObject.dateString).format("ddd")} - ${calendarDayObject.dayOfMonth} `}</Typography>
          <IconButton variant="contained" sx={{ padding: 0 }} onClick={() => handleDay(calendarDayObject)}>
            <AddBoxIcon />
          </IconButton>
        </Stack>
        <Stack spacing={1} direction="row">
          <Stack spacing={1}>
            <Typography>Gain:</Typography>
            <Typography>Spent:</Typography>
            <Typography variant="h6">Total:</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography>$100</Typography>
            <Typography>-$200</Typography>
            <Typography variant="h6">-$100</Typography>
          </Stack>
        </Stack>
      </Stack>
    );
  };

  return (
    <CalendarComponent
      yearAndMonth={yearAndMonth}
      onYearAndMonthChange={setYearAndMonth}
      renderDay={(calendarDayObject) => <CalendarDayFrame calendarDayObject={calendarDayObject} />}
    />
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await StatementModel.find({});
  const statements = JSON.parse(JSON.stringify(result));

  return { props: { statements: statements } };
}

export default Calender;
