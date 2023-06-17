import React, { useEffect, useRef, useState } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

import * as tt from "@tomtom-international/web-sdk-maps";

const TomMap = (props) => {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(-121.91599);
  const [mapLatitude, setMapLatitude] = useState(37.36765);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let map = tt.map({
      key: "fqedMw8UjCnGo885GURDR1e8CuZrjMf7",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    setInitialized(true);
    return () => map.remove();
  }, []);

  return (
    <div
      style={{ height: "500px", width: "100%" }}
      ref={mapElement}
      className="mapDiv"
    />
  );
};

export default React.memo(TomMap);
