import React, { useState } from "react";
import "./styles.css";
import { format } from "date-fns";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryZoomContainer,
  VictoryBrushContainer
} from "victory";
const activities = [
  {
    id: "64",
    name: "New town - New route",
    elapsedTime: 2092,
    totalElevationGain: 50.9,
    distance: 3955.7,
    averageHeartrate: 131.7,
    averageSpeed: {
      name: "/mi",
      speed: 14.190022915564956,
      string: "14:11",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-07-01T17:11:35Z",
    __typename: "Activity"
  },
  {
    id: "61",
    name: "Morning Run",
    elapsedTime: 2010,
    totalElevationGain: 18.5,
    distance: 3913.7,
    averageHeartrate: 132.5,
    averageSpeed: {
      name: "/mi",
      speed: 12.354205033763042,
      string: "12:21",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-06-28T17:45:58Z",
    __typename: "Activity"
  },
  {
    id: "60",
    name: "Morning Run",
    elapsedTime: 3492,
    totalElevationGain: 83.7,
    distance: 6440.9,
    averageHeartrate: 132.2,
    averageSpeed: {
      name: "/mi",
      speed: 14.09313725490196,
      string: "14:5",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-28T17:30:20Z",
    __typename: "Activity"
  },
  {
    id: "59",
    name: "Morning Run",
    elapsedTime: 2340,
    totalElevationGain: 31.5,
    distance: 4843.1,
    averageHeartrate: 133.4,
    averageSpeed: {
      name: "/mi",
      speed: 12.962962962962967,
      string: "12:57",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-25T17:37:49Z",
    __typename: "Activity"
  },
  {
    id: "58",
    name: "Morning Run",
    elapsedTime: 2642,
    totalElevationGain: 38.4,
    distance: 5341.6,
    averageHeartrate: 133.3,
    averageSpeed: {
      name: "/mi",
      speed: 12.3769987699877,
      string: "12:22",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-20T15:30:45Z",
    __typename: "Activity"
  },
  {
    id: "57",
    name: "Golden Gate Park",
    elapsedTime: 5069,
    totalElevationGain: 173,
    distance: 20712.4,
    averageHeartrate: 130,
    averageSpeed: {
      name: "/mi",
      speed: 5.206312249385591,
      string: "5:12",
      __typename: "Speed"
    },
    type: "Ride",
    startDate: "2020-05-19T14:16:04Z",
    __typename: "Activity"
  },
  {
    id: "56",
    name: "Lunch Run",
    elapsedTime: 3032,
    totalElevationGain: 49.7,
    distance: 6456.5,
    averageHeartrate: 133.5,
    averageSpeed: {
      name: "/mi",
      speed: 12.50388319353837,
      string: "12:30",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-14T18:51:42Z",
    __typename: "Activity"
  },
  {
    id: "55",
    name: "Lunch Run",
    elapsedTime: 2407,
    totalElevationGain: 66.6,
    distance: 4831.7,
    averageHeartrate: 131.2,
    averageSpeed: {
      name: "/mi",
      speed: 12.136288255691243,
      string: "12:8",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-11T18:11:36Z",
    __typename: "Activity"
  },
  {
    id: "54",
    name: "Morning Run",
    elapsedTime: 3057,
    totalElevationGain: 15.3,
    distance: 6442.9,
    averageHeartrate: 133.5,
    averageSpeed: {
      name: "/mi",
      speed: 12.52138746305802,
      string: "12:31",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-09T17:29:33Z",
    __typename: "Activity"
  },
  {
    id: "53",
    name: "Maybe dehydrated?",
    elapsedTime: 2555,
    totalElevationGain: 64.1,
    distance: 4549.8,
    averageHeartrate: 132,
    averageSpeed: {
      name: "/mi",
      speed: 14.175030815284382,
      string: "14:10",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-04T18:10:43Z",
    __typename: "Activity"
  },
  {
    id: "52",
    name: "Morning Run",
    elapsedTime: 3751,
    totalElevationGain: 31,
    distance: 7251.9,
    averageHeartrate: 134.9,
    averageSpeed: {
      name: "/mi",
      speed: 13.19239593575877,
      string: "13:11",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-05-01T16:36:02Z",
    __typename: "Activity"
  },
  {
    id: "51",
    name: "Morning Run",
    elapsedTime: 2750,
    totalElevationGain: 72,
    distance: 5367.7,
    averageHeartrate: 131.5,
    averageSpeed: {
      name: "/mi",
      speed: 13.05758313057583,
      string: "13:3",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-04-29T17:51:43Z",
    __typename: "Activity"
  },
  {
    id: "50",
    name: "Morning Run",
    elapsedTime: 3358,
    totalElevationGain: 78.6,
    distance: 6447.6,
    averageHeartrate: 131.3,
    averageSpeed: {
      name: "/mi",
      speed: 13.316790736145574,
      string: "13:19",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-04-27T17:06:00Z",
    __typename: "Activity"
  },
  {
    id: "49",
    name: "Afternoon Run",
    elapsedTime: 3746,
    totalElevationGain: 102.6,
    distance: 7079,
    averageHeartrate: 128.5,
    averageSpeed: {
      name: "/mi",
      speed: 13.968419226097522,
      string: "13:58",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2020-04-17T21:24:05Z",
    __typename: "Activity"
  },
  {
    id: "48",
    name: "Evening Run",
    elapsedTime: 2653,
    totalElevationGain: 93.1,
    distance: 5642.9,
    averageHeartrate: 127.8,
    averageSpeed: {
      name: "/mi",
      speed: 11.331644144144144,
      string: "11:19",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2019-09-24T02:11:24Z",
    __typename: "Activity"
  },
  {
    id: "47",
    name: "Walk The Hills",
    elapsedTime: 3836,
    totalElevationGain: 191.7,
    distance: 8099.6,
    averageHeartrate: 134.3,
    averageSpeed: {
      name: "/mi",
      speed: 12.711195326069793,
      string: "12:42",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2018-11-26T14:00:57Z",
    __typename: "Activity"
  },
  {
    id: "46",
    name: "Treadmill Endurance Zone Work",
    elapsedTime: 2647,
    totalElevationGain: 0,
    distance: 1518.2,
    averageHeartrate: 129.7,
    averageSpeed: {
      name: "/mi",
      speed: 46.747967479674806,
      string: "46:44",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2018-11-14T20:11:23Z",
    __typename: "Activity"
  },
  {
    id: "45",
    name: "Work ~> Gym",
    elapsedTime: 658,
    totalElevationGain: 2.3,
    distance: 1685.3,
    averageHeartrate: 133.6,
    averageSpeed: {
      name: "/mi",
      speed: 8.310106328068546,
      string: "8:18",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2018-03-21T17:40:09Z",
    __typename: "Activity"
  },
  {
    id: "44",
    name: "Morning Run",
    elapsedTime: 3911,
    totalElevationGain: 0,
    distance: 5891.3,
    averageHeartrate: 131.3,
    averageSpeed: {
      name: "/mi",
      speed: 17.81761841522798,
      string: "17:49",
      __typename: "Speed"
    },
    type: "Elliptical",
    startDate: "2018-02-10T17:39:00Z",
    __typename: "Activity"
  },
  {
    id: "43",
    name: "Morning Activity",
    elapsedTime: 2910,
    totalElevationGain: 0,
    distance: 541.4,
    averageHeartrate: 125.4,
    averageSpeed: {
      name: "/mi",
      speed: 15.211640211640212,
      string: "15:12",
      __typename: "Speed"
    },
    type: "Workout",
    startDate: "2018-01-26T15:17:08Z",
    __typename: "Activity"
  },
  {
    id: "42",
    name: "Lunch Activity",
    elapsedTime: 2790,
    totalElevationGain: 0,
    distance: 538.8,
    averageHeartrate: 132.9,
    averageSpeed: {
      name: "/mi",
      speed: 18.673161679424727,
      string: "18:40",
      __typename: "Speed"
    },
    type: "Workout",
    startDate: "2017-08-31T19:25:23Z",
    __typename: "Activity"
  },
  {
    id: "41",
    name: "Green machine",
    elapsedTime: 4092,
    totalElevationGain: 0,
    distance: 1464.4,
    averageHeartrate: 134.3,
    averageSpeed: {
      name: "/mi",
      speed: 43.70249728555918,
      string: "43:42",
      __typename: "Speed"
    },
    type: "Workout",
    startDate: "2017-08-25T04:00:01Z",
    __typename: "Activity"
  },
  {
    id: "40",
    name: "Green Machine",
    elapsedTime: 4185,
    totalElevationGain: 2.8,
    distance: 2514.4,
    averageHeartrate: 127.5,
    averageSpeed: {
      name: "/mi",
      speed: 25.950999355254677,
      string: "25:57",
      __typename: "Speed"
    },
    type: "Ride",
    startDate: "2017-08-23T03:06:12Z",
    __typename: "Activity"
  },
  {
    id: "39",
    name: "6 x 500",
    elapsedTime: 2754,
    totalElevationGain: 0,
    distance: 528.6,
    averageHeartrate: 126.9,
    averageSpeed: {
      name: "/mi",
      speed: 139.75694444444446,
      string: "139:45",
      __typename: "Speed"
    },
    type: "Rowing",
    startDate: "2017-07-31T18:23:11Z",
    __typename: "Activity"
  },
  {
    id: "38",
    name: "Gym",
    elapsedTime: 2172,
    totalElevationGain: 0,
    distance: 472.6,
    averageHeartrate: 133.5,
    averageSpeed: {
      name: "/mi",
      speed: 21.46666666666667,
      string: "21:28",
      __typename: "Speed"
    },
    type: "Crossfit",
    startDate: "2017-07-28T18:35:39Z",
    __typename: "Activity"
  },
  {
    id: "37",
    name: "Half Dome",
    elapsedTime: 20780,
    totalElevationGain: 1656.5,
    distance: 12018.5,
    averageHeartrate: 132.5,
    averageSpeed: {
      name: "/mi",
      speed: 23.851851851851855,
      string: "23:51",
      __typename: "Speed"
    },
    type: "Hike",
    startDate: "2017-06-23T09:34:07Z",
    __typename: "Activity"
  },
  {
    id: "36",
    name: "Morning Run",
    elapsedTime: 4078,
    totalElevationGain: 215.5,
    distance: 9039.9,
    averageHeartrate: 128.2,
    averageSpeed: {
      name: "/mi",
      speed: 12.10344309126447,
      string: "12:6",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2017-06-21T13:28:45Z",
    __typename: "Activity"
  },
  {
    id: "35",
    name: "Afternoon Ride",
    elapsedTime: 3034,
    totalElevationGain: 135.6,
    distance: 17243,
    averageHeartrate: 131.8,
    averageSpeed: {
      name: "/mi",
      speed: 4.47894063317198,
      string: "4:28",
      __typename: "Speed"
    },
    type: "Ride",
    startDate: "2017-03-23T23:48:03Z",
    __typename: "Activity"
  },
  {
    id: "34",
    name: "Morning Run",
    elapsedTime: 3150,
    totalElevationGain: 48.5,
    distance: 8503.8,
    averageHeartrate: 134.5,
    averageSpeed: {
      name: "/mi",
      speed: 9.031751374396949,
      string: "9:1",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2016-10-14T13:26:57Z",
    __typename: "Activity"
  },
  {
    id: "33",
    name: "Apparently you just run, for an extended period of time",
    elapsedTime: 3377,
    totalElevationGain: 65.7,
    distance: 9021.2,
    averageHeartrate: 127.8,
    averageSpeed: {
      name: "/mi",
      speed: 9.28810430368063,
      string: "9:17",
      __typename: "Speed"
    },
    type: "Run",
    startDate: "2016-09-16T13:07:19Z",
    __typename: "Activity"
  },
  {
    id: "32",
    name: "Morning Ride",
    elapsedTime: 2425,
    totalElevationGain: 40.7,
    distance: 11336.7,
    averageHeartrate: 133.5,
    averageSpeed: {
      name: "/mi",
      speed: 4.712562931741014,
      string: "4:42",
      __typename: "Speed"
    },
    type: "Ride",
    startDate: "2016-09-06T15:18:57Z",
    __typename: "Activity"
  },
  {
    id: "31",
    name: "Morning Ride",
    elapsedTime: 2191,
    totalElevationGain: 40.9,
    distance: 11324.4,
    averageHeartrate: 134.7,
    averageSpeed: {
      name: "/mi",
      speed: 4.625639257599265,
      string: "4:37",
      __typename: "Speed"
    },
    type: "Ride",
    startDate: "2016-08-25T15:37:09Z",
    __typename: "Activity"
  }
];

const tickValues = [0.94, 0.96, 0.98, 1];

const user = {
  heartrateLimits: {
    lowerLimit: 116,
    upperLimit: 132
  }
};

export default function App() {
  const baseData = {
    heartrate: {
      id: "Heartrate",
      color: "hsl(301, 70%, 50%)",
      data: []
    },
    distance: {
      id: "Distance",
      color: "hsl(210, 70%, 50%)",
      data: []
    },
    pace: {
      id: "Pace",
      color: "hsl(210, 70%, 50%)",
      data: []
    }
  };

  const info = activities.reduce((obj, activity) => {
    const startDate = new Date(activity?.startDate) || "";

    if (activity?.averageHeartrate) {
      obj.heartrate.data.push({
        x: startDate,
        y: activity.averageHeartrate || 0,
        l: `Average HR: ${activity.averageHeartrate}`
      });
    }

    if (activity?.distance) {
      const { distance } = activity;

      obj.distance.data.push({
        x: startDate,
        y: distance,
        l: `Distance: ${distance}`
      });
    }

    if (activity?.averageSpeed) {
      const { averageSpeed } = activity;
      const speed = parseFloat(averageSpeed.speed.toFixed(2));

      obj.pace.data.push({
        x: startDate,
        y: speed,
        l: `Pace: ${speed}${averageSpeed.name}`
      });
    }

    return obj;
  }, baseData);

  const maxima = {
    heartrate:
      (info &&
        info.heartrate &&
        Math.max(...info.heartrate.data.map(({ y }) => y))) ||
      0,
    distance:
      (info &&
        info.distance &&
        Math.max(...info.distance.data.map(({ y }) => y))) ||
      0,
    pace:
      (info && info.pace && Math.max(...info.pace.data.map(({ y }) => y))) || 0
  };

  const [zoom, setZoom] = useState({
    x: [new Date(info.heartrate.data[3].x), new Date(info.heartrate.data[0].x)]
  });

  console.log("zoom", zoom.x);

  // console.log(info);
  return (
    <div className="App">
      <div>
        {/* Brush Window */}
        {info && (
          <VictoryChart
            width={600}
            height={100}
            padding={{ top: 10, left: 20, right: 20, bottom: 20 }}
            scale={{ x: "time" }}
            containerComponent={
              <VictoryBrushContainer
                brushDimension="x"
                brushDomain={zoom}
                onBrushDomainChange={domain => {
                  console.log("brush", domain);
                  setZoom(domain);
                }}
              />
            }
          >
            <VictoryAxis
              // tickFormat={(x) => new Date(x).getFullYear()}
              style={{ tickLabels: { fontSize: 9 } }}
              tickFormat={t => format(t, "M/d")}
            />
            <VictoryLine
              sortKey="x"
              sortOrder="descending"
              style={{
                data: { stroke: "tomato" }
              }}
              data={info.heartrate.data}
            />
          </VictoryChart>
        )}
        <div style={{ marginTop: 10, height: 300, width: "100%" }}>
          {info && (
            <VictoryChart
              theme={VictoryTheme.material}
              height={300}
              padding={{ top: 10, bottom: 170, right: 25, left: 50 }}
              scale={{ x: "time" }}
              containerComponent={
                <VictoryZoomContainer
                  zoomDimension="x"
                  zoomDomain={zoom}
                  onZoomDomainChange={domain => {
                    console.log("zoom", domain);
                    setZoom(domain);
                  }}
                  labels={({ datum }) => datum.l}
                  // style labels - add icons
                  labelComponent={
                    <VictoryTooltip
                      cornerRadius={5}
                      flyoutStyle={{ fill: "white" }}
                    />
                  }
                />
              }
              // domain={{ y: [116, Math.round(maxima.heartrate) + 5] }}
              domain={{ y: [tickValues[0], 1] }}
            >
              {/* Heartrate Axis */}

              <VictoryAxis
                dependentAxis
                style={{ tickLabels: { fill: "orange", fontSize: 8 } }}
                tickValues={tickValues}
                // tickValues={info.heartrate.data.map(({ y }) => Math.round(y))}
                tickFormat={t => Math.round(t * maxima.heartrate)}
              />

              {/* Pace Axis */}
              <VictoryAxis
                dependentAxis
                style={{ tickLabels: { fill: "gray", fontSize: 8 } }}
                tickValues={tickValues}
                offsetX={300}
                tickFormat={t => `${Math.round(t * maxima.pace)}:00/mi`}
              />

              <VictoryAxis
                // dependentAxis

                style={{ tickLabels: { fill: "green", fontSize: 5 } }}
                tickFormat={t => {
                  return format(t, "M/d/Y");
                }}
              />

              {/* Heartrate */}
              <VictoryLine
                sortKey="x"
                sortOrder="descending"
                data={info.heartrate.data}
                y={datum => {
                  return datum.y / maxima.heartrate;
                }}
              />

              {/* Pace */}
              {/* <VictoryLine
                data={info.pace.data}
                style={{ data: { stroke: "green" } }}
                y={datum => datum.y / maxima.pace}
              /> */}

              {/* Distance */}
              {
                // <VictoryLine
                //   data={info.distance.data}
                //   y={datum => datum.y / maxima.distance}
                // />
              }
            </VictoryChart>
          )}
        </div>
      </div>
    </div>
  );
}
