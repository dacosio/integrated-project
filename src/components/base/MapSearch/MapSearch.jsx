import React, { useEffect, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import "./mapSearch.css";

const MapSearch = () => {
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: process.env.REACT_APP_MAPS_API_KEY,
    });
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div className="wrapper" style={{ width: "250px" }}>
      <input
        style={{ color: "black" }}
        value={value}
        placeholder="Search location"
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
          setValue(evt.target.value);
        }}
        // loading={isPlacePredictionsLoading}
      />
      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          display: "flex",
          flex: "1",
          flexDirection: "column",
          marginBottom: "100px",
        }}
      >
        {!isPlacePredictionsLoading && (
          <ul>
            {placePredictions.map((item) => (
              <li
                key={item.description}
                onClick={() => setValue(item.description)}
              >
                {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default React.memo(MapSearch);
