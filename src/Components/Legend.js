import * as d3 from 'd3';
import { useState, useEffect, useMemo, useRef } from 'react';
import ColorBar from '../D3Chart/ColorBar';

import '../css/legend.css';

export default function Legend() {
  const [legend, setLegend] = useState(null);
  const container = useRef();

  useEffect(() => {
    ColorBar(container.current);
  }, []);

  return (
    <div className="Legend">
      <div className="Legend__bar" ref={container}></div>
    </div>
  );
}
