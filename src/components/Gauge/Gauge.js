import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './gauge.css';

export default function Gauge() {
//   const gauge = 0.10;
  return (
    <div>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={5}
        className="gauge"
        textColor="#000"
        formatTextValue={(value) => value}
        colors={['#DCDCDC']}
        arcWidth={0.1}
        percent={0.32}
        arcPadding={0.1}
        cornerRadius={5}
        animate={false}
        needleColor="#5c9be5"
        // hideText={false}
        // arcsLength={[0.1, 0.1, 0.1, 0.1, 0.1]}
      />
    </div>
  );
}
