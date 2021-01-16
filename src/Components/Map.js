import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import '../css/Map.css';
import Spider from '../D3Chart/Spider';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2doYW4iLCJhIjoiY2szamxqbjZnMGtmbTNjbXZzamh4cng3dSJ9.GGv4GVVoZ811d6PKi54PrA';

function Map() {
  const mapContainerRef = useRef(null);
  const [, setMap] = useState(null);

  useEffect(() => {
    const colorScale = d3.schemeRdYlGn[11];
    const colors = colorScale
      .map((color, index) => {
        return [index, color];
      })
      .flat(1);

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/sghan/ck1ljdcmy16fc1cpg0f4qh3wu',
      center: [127.06243582034075, 37.49804469532547],
      zoom: 12.7,
      attributionControl: false,
    });

    map.addControl(
      new mapboxgl.AttributionControl({
        compact: true,
      })
    );

    map.on('load', () => {
      map.addSource('hexagons', {
        type: 'geojson',
        data:
          'https://raw.githubusercontent.com/Aete/transport-accessibility/master/src/data/hexagon_res_10_400m_count/hexagon_with_data.geojson',
      });

      map.addLayer({
        id: 'hexagons',
        type: 'fill',
        source: 'hexagons',
        layout: {},
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'total_score'],
            ...colors,
          ],
          'fill-opacity': 0.7,
        },
      });
      setMap(map);
    });

    map.on('click', 'hexagons', function (e) {
      const {
        x,
        y,
        score_bus,
        score_subway,
        score_bike,
        total_score,
      } = e.features[0].properties;

      d3.select('.spiderChart').remove();

      const text = textGenerate(
        total_score,
        score_bus,
        score_subway,
        score_bike
      );

      const marker = new mapboxgl.Popup()
        .setLngLat([x, y])
        .setHTML(`${text} <div class="spiderChart"></div>`)
        .addTo(map);

      Spider(d3.select('.spiderChart'), {
        score_bus,
        score_subway,
        score_bike,
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="map">
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
}

export default Map;

const textGenerate = (total_score, score_bus, score_subway, score_bike) => {
  return `
    <section class='textInfo'>
    <h1>Accessibility score</h1>
    <ul>
      <li>total score: ${Math.round(total_score * 100) / 100} / 15</li>
      <li>subway: ${Math.round(score_subway * 100) / 100} / 5</li>
      <li>bus: ${Math.round(score_bus * 100) / 100} / 5</li>
      <li>bike: ${Math.round(score_bike * 100) / 100} / 5</li>
      <li><a>Methodolgy (click)</a></li>
    </ul>
    </section>
  `;
};
