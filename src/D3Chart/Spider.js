import * as d3 from 'd3';
export default function Spider(element, data) {
  console.log(data);
  const margin = {
    top: 25,
    left: 25,
    right: 25,
    bottom: 25,
  };

  const width = 240;
  const height = 240;
  const svg = element
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

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
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', (d) => Math.cos((Math.PI * d) / 6) * rScale(5))
    .attr('y2', (d) => Math.sin((Math.PI * d) / 6) * rScale(5))
    .attr('stroke', '#636363');

  const busCoord = `${Math.cos(Math.PI / 6) * rScale(+data.score_bus)}, ${
    Math.sin(Math.PI / 6) * rScale(+data.score_bus)
  }`;
  const subwayCoord = `0,${-rScale(+data.score_subway)}`;
  const bikeCoord = `${
    Math.cos((5 * Math.PI) / 6) * rScale(+data.score_bike)
  }, ${Math.sin((5 * Math.PI) / 6) * rScale(+data.score_bike)}`;

  polygon
    .append('polygon')
    .attr('points', `${busCoord} ${subwayCoord} ${bikeCoord}`)
    .attr('fill', '#2196F3')
    .attr('fill-opacity', 0.3)
    .attr('stroke', '#2963FF')
    .attr('stroke-width', 2);

  polygon
    .append('text')
    .text('bus')
    .attr('text-anchor', 'middle')
    .attr('x', Math.cos(Math.PI / 6) * rScale(6))
    .attr('y', Math.sin(Math.PI / 6) * rScale(6))
    .attr('fill', '#FFFFFF')
    .style('font-size', '12px');

  polygon
    .append('text')
    .text('bike')
    .attr('text-anchor', 'middle')
    .attr('x', Math.cos((Math.PI * 5) / 6) * rScale(6))
    .attr('y', Math.sin((Math.PI * 5) / 6) * rScale(6))
    .attr('fill', '#FFFFFF')
    .style('font-size', '12px');

  polygon
    .append('text')
    .text('subway')
    .attr('text-anchor', 'middle')
    .attr('x', Math.cos((Math.PI * 9) / 6) * rScale(6))
    .attr('y', Math.sin((Math.PI * 9) / 6) * rScale(6) + 12)
    .attr('fill', '#FFFFFF')
    .style('font-size', '12px');
}
