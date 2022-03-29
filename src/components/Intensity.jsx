import React from "react";
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/_intensity.scss";

/**
 * Créate diagrame Intensity
 * @param { object } data - the score of the day
 * @returns  { Diagrame }
 */
export default function Intensity(data) {

  // add key in the data array
  for(let radarData of data.keyData.data) {
    const index = radarData.kind;
    radarData.key = data.keyData.kind[index]
  }

  return (
    <div className="bloc-intensity">
      <ResponsiveContainer width="100%" height={175}>
        <RadarChart
          cx="50%"
          cy={90}
          outerRadius="50%"
          width={100}
          height={100}
          data={data.keyData.data}
          fill="#ffff"
        >
          <PolarGrid />
          <PolarAngleAxis fontSize={12} fill="#E60000" dataKey="key"/>
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Intensity.propTypes = {
    data: PropTypes.array,
    kind: PropTypes.string
};