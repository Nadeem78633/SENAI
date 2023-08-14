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

const FeelsLike = () => {
  return (
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
            Feels Like
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
            <DeviceThermostatOutlinedIcon style={{ color: "white" }} />
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
            30 &deg;
          </Typography>
        </Stack>
        {/*Humidity */}
        <div style={{ display: "flex" }}>
          <div>
            <Stack direction="row" spacing={8}>
              <Typography
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                0 &deg;
              </Typography>
              <Typography
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                25 &deg;
              </Typography>
              <Typography
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  color: "grey",
                }}
              >
                50 &deg;
              </Typography>
            </Stack>
            <BorderLinearProgress
              value={50}
              variant="determinate"
              style={{ flexBasis: 0, flexGrow: 1, width: "200px" }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeelsLike;
