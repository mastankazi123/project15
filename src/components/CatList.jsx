import { Card, CardContent, Grid } from "@mui/material";
import React,{useState,useEffect} from "react";
import axios from "axios"
import { CatItem } from "./CatItem";




 export const CatList=({handleSelectedCat})=>{
    const [data,setdata]=useState([]);

    const getData=async()=>{
        const result = await  axios.get("https://fakestoreapi.com/products/categories")
        setdata(result.data)
    }
    useEffect(()=>{
        getData()
    },[])

    return(
            
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        data.map((item)=>

                            <CatItem handleSelectedCat={handleSelectedCat} item={item} />
                        )

                    }

                </Grid>
            </CardContent>
        </Card>
    )
}