import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NearMeIcon from "@mui/icons-material/NearMe";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LightModeIcon from "@mui/icons-material/LightMode";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// components
import Chart from "../Chart/Chart";
import WeatherDeatil from "../WeatherDetail/WeatherDeatil";


const Home = () => {
  const [temperature, setTemperature] = React.useState(25); // Initial temperature

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const currentDate = new Date().toLocaleDateString([], {
    day: "numeric",
    month: "long",
  });

  return (
    <Card
      style={{
        backgroundColor: "#e4f1ff",
        boxShadow: "none",
        borderRadius: "30px",
        margin: "20px", // Adjusted margin for spacing
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between" // Space between items
          sx={{ marginBottom: 2 }} // Margin bottom for spacing
        >
          <div>
            <Typography
              style={{
                fontFamily: "Nunito",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Welcome back Isabella!
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Nunito", fontSize: "14px" }}
            >
              Check out Toady weather information
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MoreHorizIcon
              style={{
                color: "black",
                height: "30px",
                width: "30px",
                marginRight: "10px",
              }}
            />
            <Avatar
              alt="Remy Sharp"
              variant="rounded"
              src={process.env.PUBLIC_URL + "/img/avg.jpg"}
            />
          </div>
        </Stack>
        {/*Upcoming Hours*/}
        <Card style={{ borderRadius: "20px" }}>
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between" // Space between items
              sx={{ marginBottom: 2 }} // Margin bottom for spacing
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Upcoming Hours
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#f1f1f1",
                    color: "	#808080",

                    fontSize: "14px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow:
                      "0px 2px 4px rgba(0, 0, 0, 0.2)" /* Adding a shadow */,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  Rain percipation
                  <KeyboardArrowDownIcon />
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#f1f1f1",
                    color: "black",
                    fontSize: "14px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow:
                      "0px 2px 4px rgba(0, 0, 0, 0.2)" /* Adding a shadow */,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "24px",
                  }}
                >
                  Next Days
                  <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
                </button>
              </div>
            </Stack>
            <Chart />
          </CardContent>
        </Card>
        <WeatherDeatil />
      </CardContent>
    </Card>
  );
};

export default Home;
