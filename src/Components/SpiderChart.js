import { useState, useRef, useEffect } from 'react';

export default function SpiderChart() {
  const [chart, setChart] = useState(null);
  const container = useRef();

  useEffect(() => {
    if (!chart) {
      setChart();
    }
  }, [chart]);
  return <div ref={container}></div>;
}
