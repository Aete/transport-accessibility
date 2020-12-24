import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

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
    }).addControl(
      new mapboxgl.AttributionControl({
        compact: true,
      })
    );
    map.on('load', () => {
      map.addSource('buildings', {
        type: 'geojson',
        data:
          'https://raw.githubusercontent.com/Aete/transport-accessibility/master/src/data/gangnamGu-building-residential.geojson',
      });

      map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        layout: {},
        paint: {
          'fill-color': '#f44336',
          'fill-opacity': 0.7,
        },
      });

      "paint": {
        

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
