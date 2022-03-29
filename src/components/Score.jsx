import "../styles/_score.scss";
import React from "react";
import PropTypes from 'prop-types';
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

/**
 * Créate diagrame todayScore
 * @param { number } score - the score of the day
 * @returns  { Diagrame }
 */
export default function Score(score) {

  // Get value todayScore or score
  let dataScore;
  if (!score.score) {
    dataScore = score.todayScore;
  }else{
    dataScore = score.score;
  }

  // Return the value in %
  let resultScore = Math.round(dataScore * 100)
  const data = [
    { name: "score", value: resultScore },
    // Set the score max (100)
    { name: "score", value: 100 }
  ];

  const customLabel = () => {
    return (
      <g className="label">
        <text x="37%" y="50%" fontSize="26" fill="black">
          {`${data[0].value} %`}
        </text>
        <text x="40%" y="65%" fontSize="12" fill="gray">de votre</text>
        <text x="40.5%" y="78%" fontSize="12" fill="gray">objectif</text>
      </g>
    );
  };

  return (
    <div className="bloc-score">
      <span className="title">score</span>
      <ResponsiveContainer width={190} height={155}>
        <RadialBarChart
          cx={100}
          cy={90}
          innerRadius={60}
          outerRadius={100}
          barSize={7}
          data={data}
        >
          <RadialBar
            minAngle={15}
            endAngle={10}
            label={customLabel}
            fill="#E60000"
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}


Score.propTypes = {
    todayScore: PropTypes.number,
    score: PropTypes.number
};