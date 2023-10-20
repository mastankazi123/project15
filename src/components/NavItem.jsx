import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const NavItem = ({ item }) => {
  return (
    <Card>
      <CardContent>    
        <Grid item xs={item.xs}>
      <Link to={item.link}>
        <Button variant="contained" fullWidth>
          {item.label}
        </Button>
      </Link>
    </Grid>
    </CardContent>
    </Card>

  );
};
