import React, { useEffect, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import styles from "./mapSearch.module.css";
import SearchField from "../SearchField/SearchField";

const { wrapper, prediction, predictionItem } = styles;

const MapSearch = () => {
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
  });
  const [value, setValue] = useState("");
  const [place, setPlace] = useState("");

  const handleReset = () => {
    setValue("");
    getPlacePredictions({ input: "" });
  };

  const handleSelectPlace = (item) => {
    getPlacePredictions({ input: "" });
    setValue(item.description);
    placesService?.getDetails(
      {
        placeId: item.place_id,
      },
      (placeDetails) => setPlace(placeDetails)
    );
  };

  console.log(place.geometry.location.lat(), place.geometry.location.lng());
  return (
    <div className={wrapper}>
      <SearchField
        value={value}
        resetValue={handleReset}
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
          setValue(evt.target.value);
        }}
        placeholder="Search location"
        location
      />
      <div className={prediction}>
        {!isPlacePredictionsLoading &&
          placePredictions.map((item) => (
            <div
              className={predictionItem}
              key={item.description}
              onClick={() => handleSelectPlace(item)}
            >
              {item.description}
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(MapSearch);
