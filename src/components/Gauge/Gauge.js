/* eslint-disable */
import React from 'react';
import { useGauge } from 'use-gauge';
import { useSelector } from 'react-redux';
import './gauge.css'

export default function Gauge() {
    const weatherState = useSelector((state) => state.weatherReducer);
  // eslint-disable-next-line
  const wind = weatherState[0].wind;
  const value = wind;
  const minValue = 0;
  const arcStrokeWidth = 7;
  const strokeLineCap = 'round';
  const progressColor = '#5C9BE5';
  const tickColor = 'black';
  const tickLength = 3;
  const baseRadius = 3;
  const {
    ticks, getTickProps, getLabelProps, valueToAngle, angleToValue,getArcProps, getNeedleProps, getSVGProps,}
    = useGauge({ startAngle: 90, endAngle: 270, numTicks: 5, diameter: 60, domain: [0, 40]});

  const { points } = getNeedleProps({ value, baseRadius, tipRadius: 1 });

  return (
    <>
        <div className="gauge-container flex items-center justify-center">
        <svg {...getSVGProps()} className="gauge max-w-full overflow-visible">
            <path {...getArcProps({ offset: 8, startAngle: 90, endAngle: 270 })} fill="none" className="stroke-gray-100" 
            strokeWidth={arcStrokeWidth} strokeLinecap={strokeLineCap} />
            {value > minValue && (
            <path {...getArcProps({ offset :8, startAngle: 90, endAngle: valueToAngle(value) })} fill="none" stroke={progressColor} strokeWidth={arcStrokeWidth} strokeLinecap={strokeLineCap} />
            )}
            <g id="ticks">
                {ticks.map((angle) => {
                    return (
                    <React.Fragment key={`tick-group-${angle}`}>
                        <line stroke={tickColor} {...getTickProps({ angle, length: tickLength })} />
                        <text className="tick-text fill-gray-500" {...getLabelProps({ angle, offset: -15 })}>
                        {angleToValue(angle)}
                        </text>
                    </React.Fragment>
                    );
                })}
            </g>
            <g id="needle">
            <polyline fill="#619DE6" points={points} />
            <circle fill="#619DE6" r={3} />
            </g>
        </svg>
        </div>
        <text className="wind-value">{value}&nbsp;km/h</text>
    </>
  );
}
