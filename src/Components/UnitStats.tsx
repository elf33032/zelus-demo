import React, { useEffect, useState } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { token } from "../Pages/ManageProperty";
import axios from "axios";

interface UnitStatsProps {
  propertyId: number;
}
const UnitStats: React.FC<UnitStatsProps> = (props) => {
  const [rent, setRent] = useState(0.0);
  const [renting, setRenting] = useState();
  const [room, setRoom] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // find company property unit with tenant
        let response = await axios.get(
          `http://localhost:1337/api/units?populate=*&filters[$and][0][tenants][id][$notNull]=true&filters[$and][1][property][id][$eq]=${props.propertyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRenting(response.data.data.length);
        response = await axios.get(
          `http://localhost:1337/api/units?populate=*&filters[property][id][$eq]=${props.propertyId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRoom(response.data.data.length);
        let sum = 0.0;
        for (let index = 0; index < response.data.data.length; index++) {
          sum += response.data.data[index].attributes.rentRate;
        }
        setRent(sum);
      } catch (error) {
        console.log("Error in fetching data");
      }
    };
    fetchData();
  }, []);
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="subtitle1"> Total room</Typography>
          <Typography variant="h5">{room}</Typography>
        </Grid>
        <Grid
          item
          xs={1}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          overflow={"hidden"}
        >
          <Divider orientation="vertical" variant="middle" />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1"> Renting Rooms </Typography>
          <Typography variant="h5">{renting}</Typography>
        </Grid>
        <Grid
          item
          xs={1}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Divider orientation="vertical" variant="middle" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1"> Total Rent</Typography>
          <Typography variant="h5">$ {rent}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UnitStats;
