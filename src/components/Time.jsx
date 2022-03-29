import React from "react";
import "../styles/_time.scss";
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

/**
 * Return the first letter of each day
 * @param { number } day - number of day
 * @returns { string }
 */
const days = (day) => {
  switch (day) {
    case 1: return "L";
    case 2:
    case 3: return "M";
    case 4: return "J";
    case 5: return "V";
    case 6: return "S";
    case 7: return "D";
    default: return "";
  }
}

/**
 * Créate diagrame time
 * @param { array } data - the sessionLength of the day
 * @returns  { Diagrame }
 */
export default function Time(data) {

  for(let time of data.time) {
    // Add key in the array time
    // Key take the value returned by the days function
    time.key = days(time.day);
  }

  return (
    <div className="bloc-time">
      <div className="bloc-content-time">
        <p>Durée moyenne des sessions</p>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart
          data={data.time}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0
          }}
        >
          <XAxis fontSize={12} stroke="#ffff" dataKey="key" />
          <Tooltip />
          <Area type="monotone" dataKey="sessionLength" stroke="#ffff" fill="#FF0000" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


days.propTypes = {
    time: PropTypes.array
};