import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

const data = [
  {
    name: "23%",

    pv: 15,
  },
  {
    name: "29%",

    pv: 25,
  },
  {
    name: "58%",

    pv: 30,
  },
  {
    name: "75%",

    pv: 48,
  },
  {
    name: "33%",

    pv: 30,
  },
  {
    name: "20%",

    pv: 20,
  },
  {
    name: "73%",

    pv: 35,
  },
  {
    name: "49%",

    pv: 20,
  },
];

const icons = [
  {
    time: "Now",
    icon: <LightModeOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "27",
  },
  {
    time: "11.00",
    icon: <LightModeOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "28",
  },
  {
    time: "12.00",
    icon: <CloudOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "28",
  },
  {
    time: "13.00",
    icon: <CloudOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "29",
  },
  {
    time: "14.00",
    icon: <LightModeOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "30",
  },
  {
    time: "15.00",
    icon: <CloudOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "29",
  },
  {
    time: "16.00",
    icon: <CloudOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "29",
  },
  {
    time: "17.00",
    icon: <LightModeOutlinedIcon style={{ height: "20px", width: "20px" }} />,
    temp: "28",
  },
];

const Chart = () => {
  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between" // Space between items
        sx={{ marginLeft: "10px", marginRight: "10px" }}
      >
        {icons.map((d, i) => (
          <Stack
            key={i}
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              style={{
                color: i === 0 ? "black" : "gray",
                fontFamily: "Nunito",
                fontSize: "12px",
              }} // Change color conditionally
            >
              {d.time}
            </Typography>
            <span>{d.icon}</span>
            <Typography
              style={{
                fontFamily: "Nunito",
                fontSize: "14px",
                color: "black",
                fontWeight: "500",
              }}
            >
              {d.temp}&deg;
            </Typography>
          </Stack>
        ))}
      </Stack>
      <ResponsiveContainer width="100%" height={130}>
        <AreaChart
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{
              fontFamily: "Nunito",
              fontSize: "12px",
              fontWeight: "400",
              color: "grey",
            }} // Change "YourFontName" to the desired font
          />

          {/* Add LabelList to display labels above all Y-axis data points */}
          <Area
            type="linear"
            dataKey="pv"
            stroke="#5c9ce5"
            fill="#5c9ce5"
            fillOpacity={1}
          />
          <CartesianGrid horizontal={false} stroke="black" strokeWidth={0.5} />

          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
