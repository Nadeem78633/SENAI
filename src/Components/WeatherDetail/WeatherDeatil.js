import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

// Components
import Wind from "./Wind";
import Precipitation from "./Precipitation";
import UvIndex from "./UvIndex";
import FeelsLike from "./FeelsLike";

// Icons
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";

// Progress
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ChanceOfRain from "./ChanceOfRain";

// Progress bar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#5c9ce5" : "#5c9ce5",
  },
}));

const WeatherDeatil = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <Typography
          style={{ fontFamily: "Nunito", fontSize: "14px", fontWeight: 700 ,amrginTop:'30px',marginBottom:'30px'}}
        >
          More details of today weather
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={4} sm={12}>
            <Card style={{ borderRadius: "20px" }}>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between" // Space between items
                  // Margin bottom for spacing
                >
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontFamily: "Nunito",
                      fontWeight: "600",
                    }}
                  >
                    Humidity
                  </Typography>
                  <Avatar
                    variant="rounded"
                    style={{
                      backgroundColor: "#5c9ce5",
                      borderRadius: "10px",
                      height: "30px",
                      width: "30px",
                    }}
                  >
                    <WaterDropOutlinedIcon style={{ color: "white" }} />
                  </Avatar>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center" // Space between items
                  // Margin bottom for spacing
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      fontFamily: "Nunito",
                    }}
                  >
                    82%
                  </Typography>
                  <span
                    style={{
                      color: "grey",
                      fontFamily: "Nunito",
                      marginLeft: "5px",
                    }}
                  >
                    bad
                  </span>
                </Stack>
                {/*Humidity */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Typography
                      style={{
                        fontFamily: "Nunito",
                        fontSize: "14px",
                        color: "grey",
                      }}
                    >
                      good
                    </Typography>
                    <BorderLinearProgress
                      value={100}
                      variant="determinate"
                      style={{ flexBasis: 0, flexGrow: 1, width: "50px" }}
                    />
                  </div>
                  <div>
                    <Typography
                      style={{
                        fontFamily: "Nunito",
                        fontSize: "14px",
                        color: "grey",
                      }}
                    >
                      normal
                    </Typography>
                    <BorderLinearProgress
                      value={100}
                      variant="determinate"
                      style={{ flexBasis: 0, flexGrow: 1, width: "50px" }}
                    />
                  </div>
                  <div>
                    <Typography
                      style={{
                        fontFamily: "Nunito",
                        fontSize: "14px",
                        color: "grey",
                      }}
                    >
                      bad
                    </Typography>
                    <BorderLinearProgress
                      value={40}
                      variant="determinate"
                      style={{ flexBasis: 0, flexGrow: 1, width: "50px" }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/*Wind*/}
          <Grid item md={4} sm={12}>
            <Wind />
          </Grid>
          <Grid item md={4} sm={12}>
            <Precipitation />
          </Grid>
          <Grid item md={4} sm={12}>
            <UvIndex />
          </Grid>
          <Grid item md={4} sm={12}>
            <FeelsLike />
          </Grid>
          <Grid item md={4} sm={12}>
            <ChanceOfRain />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default WeatherDeatil;
