import * as d3 from 'd3';
export default function Spider(
  element,
  { score_bus, score_bike, score_subway }
) {
  const margin = {
    top: 25,
    left: 25,
    right: 25,
    bottom: 25,
  };

  const width = 240;
  const height = 240;
  const viewbox = [
    0,
    0,
    width + margin.left + margin.right,
    height + margin.top + margin.bottom,
  ];

  const svg = element
    .append('svg')
    .attr('viewBox', viewbox)
    .attr('preserveAspectRatio', 'xMinYMid meet');

  const newFontSize = 12 * (290 / parseInt(d3.select('svg').style('width')));

  const container = svg
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const rScale = d3
    .scaleLinear()
    .domain([0, 5])
    .range([0, width / 2]);

  const score = [0, 1, 2, 3, 4, 5];

  const axisSub = container
    .selectAll('.axis-sub')
    .data(score)
    .enter()
    .append('circle')
    .attr('class', 'axis-sub')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('fill', 'none')
    .attr('stroke', '#424242')
    .attr('r', (d) => rScale(d));

  const label = container
    .selectAll('.label')
    .data(score.slice(1))
    .enter()
    .append('text')
    .text((d) => d)
    .attr('text-anchor', 'middle')
    .attr('y', (d) => rScale(d) + rScale(5) + 15)
    .attr('x', width / 2)
    .style('font-size', '10px')
    .attr('fill', (d) => '#636363');

  const polygon = container
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  polygon
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('fill', '#636363')
    .attr('r', 1);

  const axisMain = polygon
    .selectAll('.axis-main')
    .data([1, 5, 9])
    .enter()
    .append('line')
    .attr('class', 'axis-main')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', (d) => Math.cos((Math.PI * d) / 6) * rScale(5))
    .attr('y2', (d) => Math.sin((Math.PI * d) / 6) * rScale(5))
    .attr('stroke', '#636363');

  const busCoord = `${Math.cos(Math.PI / 6) * rScale(+score_bus)}, ${
    Math.sin(Math.PI / 6) * rScale(+score_bus)
  }`;
  const subwayCoord = `0,${-rScale(+score_subway)}`;
  const bikeCoord = `${Math.cos((5 * Math.PI) / 6) * rScale(+score_bike)}, ${
    Math.sin((5 * Math.PI) / 6) * rScale(+score_bike)
  }`;

  polygon
    .append('polygon')
    .attr('fill', '#2196F3')
    .attr('fill-opacity', 0.3)
    .attr('stroke', '#2963FF')
    .attr('stroke-width', 2)
    .attr('points', '0,0 0,0 0,0')
    .transition()
    .duration(300)
    .attr('points', `${busCoord} ${subwayCoord} ${bikeCoord}`);

  polygon
    .selectAll('.point')
    .data([score_bus, score_bike, score_subway])
    .enter()
    .append('circle')
    .attr('class', 'point')
    .attr('cx', (d, i) => Math.cos((Math.PI * (i * 4 + 1)) / 6) * rScale(d))
    .attr('cy', (d, i) => Math.sin((Math.PI * (i * 4 + 1)) / 6) * rScale(d))
    .attr('r', '3')
    .attr('fill', '#2196F3');

  polygon
    .append('text')
    .text('bus')
    .attr('text-anchor', 'middle')
    .attr('x', Math.cos(Math.PI / 6) * rScale(6))
    .attr('y', Math.sin(Math.PI / 6) * rScale(6))
    .attr('fill', '#FFFFFF')
    .style('font-size', `${newFontSize}px`);

  polygon
    .append('text')
    .text('bike')
    .attr('text-anchor', 'middle')
    .attr('x', Math.cos((Math.PI * 5) / 6) * rScale(6))
    .attr('y', Math.sin((Math.PI * 5) / 6) * rScale(6))
    .attr('fill', '#FFFFFF')
    .style('font-size', `${newFontSize}px`);

  polygon
    .append('text')
    .text('subway')
    .attr('text-anchor', 'middle')
    .attr('x', Math.cos((Math.PI * 9) / 6) * rScale(6))
    .attr('y', Math.sin((Math.PI * 9) / 6) * rScale(6) + 12)
    .attr('fill', '#FFFFFF')
    .style('font-size', `${newFontSize}px`);
}
