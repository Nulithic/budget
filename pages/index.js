import Link from "next/link";
import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import { Box, Button, Grid, Paper, Stack, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import { useGlobalEvent } from "beautiful-react-hooks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
}));

const Index = ({ statements }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const onWindowResize = useGlobalEvent("resize");

  onWindowResize(() => {
    setWindowHeight(window.innerHeight);
  });

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Link href="/calender">Calendar</Link>
    </Box>
  );
};

export default Index;
