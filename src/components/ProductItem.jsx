import React from "react";
import { Grid, Card, CardContent, Rating } from "@mui/material";

export const ProudctItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card  sx={{height:"550px" , textAlign:"center" , margin:"4px"}}>
        <CardContent>
          <h4>{item.title.slice(0,30)}</h4>
          <h6>{item.description.slice(0,30)}</h6>
          <img  width={200}  src={item.image} alt="" />
          <h2>{item.category}</h2>
          <Rating value={item.rating.rate} />({item.rating.count})
        </CardContent>
      </Card>
    </Grid>
  );
};
