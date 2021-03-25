import * as d3 from 'd3';

export default function ColorBar(element) {
  const margin = {
    top: 15,
    left: 10,
    right: 20,
    bottom: 10,
  };

  const colorScale = d3.schemeRdYlGn[11];
  const colors = colorScale.map((color, index) => {
    return [index, color];
  });

  const width = 200 - margin.left - margin.right;
  const height = 50 - margin.top - margin.bottom;
  const svg = d3
    .select(element)
    .append('svg')
    .attr('class', 'SVG_legend')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom);

  const defs = svg.append('defs');
  const linearGradient = defs.append('linearGradient').attr('id', 'myGradient');
  linearGradient
    .selectAll('stop')
    .data(colors)
    .enter()
    .append('stop')
    .attr('offset', (d) => ((d[0] - 0) / 10) * 100 + '%')
    .attr('stop-color', (d) => d[1]);

  const container = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

  container.append('rect').attr('width', width).attr('height', 10).attr('fill', 'url(#myGradient)').style('opacity', 0.7);

  const xAxis = container.append('g').attr('transform', `translate(0,${13})`);

  const xScale = d3.scaleLinear().domain([0, 10]).range([0, width]);

  const xAxisFunction = d3.axisBottom(xScale).ticks(10);

  xAxis.call(xAxisFunction);

  xAxis.selectAll('.tick>line').attr('stroke', '#ccc');
  xAxis.selectAll('.tick>text').attr('fill', '#ccc');
  xAxis.select('.tick:last-child>text').text('10 ≤');
  container.select('.domain').remove();
}
