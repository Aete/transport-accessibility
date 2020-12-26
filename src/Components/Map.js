import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import RulerControl from 'mapbox-gl-controls/lib/ruler';

import '../css/Map.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2doYW4iLCJhIjoiY2szamxqbjZnMGtmbTNjbXZzamh4cng3dSJ9.GGv4GVVoZ811d6PKi54PrA';

function Map() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
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

    map.addControl(new RulerControl(), 'top-right');
    map.on('ruler.on', () => console.log('ruler: on'));
    map.on('ruler.off', () => console.log('ruler: off'));

    map.on('load', () => {
      map.addSource('buildings', {
        type: 'geojson',
        data:
          'https://raw.githubusercontent.com/Aete/transport-accessibility/master/src/data/gangnamGu-building-residential.geojson',
      });

      map.addSource('busStops', {
        type: 'geojson',
        data:
          'https://raw.githubusercontent.com/Aete/transport-accessibility/master/src/data/seoulBusStop.geojson',
      });

      map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        layout: {},
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'count_bus_stop'],
            0,
            '#F44336',
            11,
            '#FFF082',
            22,
            '#4CAF50',
            33,
            '#1B5E20',
          ],
        },
      });

      map.addLayer({
        id: 'busStops',
        source: 'busStops',
        type: 'circle',
        paint: {
          'circle-color': '#969696',
          'circle-radius': 3,
        },
      });

      setMap(map);
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
