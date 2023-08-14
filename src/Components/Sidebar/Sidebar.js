import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NearMeIcon from "@mui/icons-material/NearMe";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LightModeIcon from "@mui/icons-material/LightMode";

// Components
import Home from "../Home/Home";

const Sidebar = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // This option removes the AM/PM indicator
  });
  const currentDate = new Date().toLocaleDateString([], {
    day: "numeric",
    month: "long",
  });

  const [temperature, setTemperature] = useState(27);

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{ borderRadius: "30px", margin: "60px" }}
    >
      <Grid
        container
        style={{
          backgroundColor: "#5c9ce5",
          borderRadius: "30px",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={3}
          md={3}
          style={{ backgroundColor: "#5c9ce5", position: "relative" }}
        >
          <Card style={{ backgroundColor: "#5c9ce5", boxShadow: "none" }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between" // Space between items
                marginTop="20px"
              >
                <AddBoxIcon
                  style={{
                    color: "white",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                  }}
                />

                <MoreHorizIcon
                  style={{ color: "white", height: "30px", width: "30px" }}
                />
                <span style={{ color: "white", fontFamily: "Nunito" }}>
                  &deg;C
                  <Switch />
                  &deg;F
                </span>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                style={{
                  direction: "row",

                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "35px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <NearMeIcon
                    style={{ height: "20px", width: "20px", color: "#d6e5f8" }}
                  />
                  <Typography
                    style={{
                      color: "#d6e5f8",
                      fontFamily: "Nunito",
                      marginLeft: "5px",
                      fontSize: "15px",
                    }}
                  >
                    New York, USA
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <WatchLaterIcon
                    style={{ height: "20px", width: "20px", color: "#d6e5f8" }}
                  />
                  <Typography
                    style={{
                      color: "#d6e5f8",
                      fontFamily: "Nunito",
                      marginLeft: "5px",
                      fontSize: "13px",
                      fontFamily: "Nunito",
                    }}
                  >
                    {currentTime}
                  </Typography>
                </div>
              </Stack>
              {/*Today*/}
              <Stack
                direction="row"
                spacing={1}
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    style={{
                      color: "#d6e5f8",
                      fontFamily: "Nunito",
                      marginLeft: "5px",
                      fontSize: "12px",
                    }}
                  >
                    Today {currentDate}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <WatchLaterIcon
                    style={{ height: "20px", width: "20px", color: "#d6e5f8" }}
                  />
                  <Typography
                    style={{
                      color: "#d6e5f8",
                      fontFamily: "Nunito",
                      marginLeft: "5px",
                      fontSize: "13px",
                      fontFamily: "Nunito",
                    }}
                  >
                    {currentTime}
                  </Typography>
                </div>
              </Stack>
              {/*Temperature*/}
              <Stack
                direction="row"
                spacing={1}
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "35px",
                }}
              >
                <ArrowBackIosIcon
                  style={{ height: "20px", width: "20px", color: "#d6e5f8" }}
                />

                <Typography
                  variant="h4"
                  style={{
                    color: "white",
                    fontFamily: "Nunito",

                    fontSize: "70px",
                  }}
                >
                  {temperature}&deg;
                </Typography>

                <ArrowForwardIosIcon
                  style={{ height: "20px", width: "20px", color: "#d6e5f8" }}
                />
                {/* Sunny*/}
              </Stack>
              <Stack
                direction="row"
                spacing={5}
                style={{ marginTop: "5px" }}
                alignItems="center"
                justifyContent="center"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LightModeIcon style={{ color: "white" }} />
                  <Typography
                    style={{
                      marginLeft: "5px",
                      color: "white",
                      marginRight: "25px",
                    }}
                  >
                    Sunny
                  </Typography>
                </div>
              </Stack>
            </CardContent>
          </Card>

          <Card style={{ marginTop: "450px" }}>
            <CardMedia>
              <img
                src={process.env.PUBLIC_URL + "/img/house.png"}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                }}
              />
            </CardMedia>
          </Card>
        </Grid>
        <Grid
          item
          xs={9}
          md={9}
          style={{ backgroundColor: "#e4f1ff", borderRadius: "30px" }}
        >
          <Home />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Sidebar;
