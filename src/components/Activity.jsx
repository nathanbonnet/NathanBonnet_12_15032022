import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/_activity.scss';

  /**
   * Creation diagram of the activity of the week
   * @param { array } data - activity data of the week
   * @returns  { Diagrame }
   */
  export default function Activity(data) {
    // Return MinKilogram MaxKilogram MoyKilogram
    let Kilogram = [];
    for(let dataDay of data.activity) {
      Kilogram.push(dataDay.kilogram);
    }

    let MinKilogram = Math.min(...Kilogram);
    let MaxKilogram = Math.max(...Kilogram);
    let MoyKilogram = MinKilogram + Math.floor(( MaxKilogram - MinKilogram ) / 2);

    let number;
    if (MinKilogram != MoyKilogram && MaxKilogram != MoyKilogram) {
      number = <span>{MoyKilogram}</span>
    }else {
      number = "";
    }

    // custom Tooltip
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{payload[0].value} Kg</p>
            <p className="label">{payload[1].value} Kcal</p>
          </div>
        );
      }
    
      return null;
    };

    return (
      <div className="bloc-activity-component">
          <div className="header-activity">
              <p>Activité quotidienne</p>
              <div className="legend">
                  <p>Poids (kg)</p>
                  <p>Calories brûlées (kCal)</p>
              </div>
          </div>
          <div className="activity-component">
              <ResponsiveContainer width="90%">
                <BarChart
                  height={200}
                  data={data.activity}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis fontSize={12} dataKey="data" />
                  <Tooltip content={<CustomTooltip />}/>
                  <Bar dataKey="kilogram" barSize={7} radius={5} fill="#282D30" />
                  <Bar dataKey="calories" barSize={7} radius={5} fill="#E60000" />
                </BarChart>
              </ResponsiveContainer>
              <div className="bloc-span">
                <span>{MaxKilogram}</span>
                {number}
                <span>{MinKilogram}</span>
              </div>
            </div>
        </div>
    );
  }


Activity.propTypes = {
  activity: PropTypes.array
};