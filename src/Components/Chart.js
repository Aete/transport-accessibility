import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import Spider from '../D3Chart/Spider';
import '../css/chart.css';

export default function Chart({ scores }) {
  console.log('!');
  const { score_bus, score_bike, score_subway } = scores;
  const [chart, setChart] = useState(null);
  const container = useRef();

  useEffect(() => {
    if (!chart) {
      setChart(
        new Spider(d3.select(container.current), {
          score_bus,
          score_bike,
          score_subway,
        })
      );
    }
    return setChart(null);
  }, [chart]);

  return (
    <div className="chart">
      <div ref={container}></div>
    </div>
  );
}
