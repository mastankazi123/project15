import { Grid } from "@mui/material";
import React, { useState } from "react";

export const Bulb = () => {
  const [cond, setcond] = useState(false);

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <img src="Bulbon.png" alt="no imagen" />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};
