import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

// Speedometer
import Speedometer from "./Speedometer";

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

const Wind = () => {
  return (
    <div>
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
              Wind
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
              <AirOutlinedIcon style={{ color: "white" }} />
            </Avatar>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center" // Space between items
            // Margin bottom for spacing
          >
            <Speedometer />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wind;
