import React, { useState, useEffect } from "react";
import { CatList } from "./CatList";
import { ProudctItem } from "./ProductItem";
import axios from "axios";
import { Grid } from "@mui/material";

export const ProudctList = () => {
  const [data, setdata] = useState([]);
  const [selectCat,setSelectCat]=useState("electronics")

  const getData = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/category/${selectCat} `);
    setdata(result.data);
  };

  const handleSelectedCat=(cat)=>{

                  setSelectCat(cat)     

  }

  useEffect(() => {
    getData();
  }, [selectCat]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <CatList handleSelectedCat={handleSelectedCat} />
        </Grid>

        {data.map((item) => (
          <ProudctItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
