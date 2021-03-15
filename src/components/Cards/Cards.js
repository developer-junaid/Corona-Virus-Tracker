import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import "../../App.css";
import CountUp from "react-countup";

function Cards({ state: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={"card-container"}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          elevation={10}
          component={Card}
          xs={12}
          md={3}
          className={"card infected"}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Active cases of Covid-19 !</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          elevation={10}
          component={Card}
          xs={12}
          md={3}
          className={"card recovered"}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Recoveries from Covid-19 !</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          elevation={10}
          xs={12}
          md={3}
          className={"card deaths"}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Deaths caused by Covid-19 !</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
