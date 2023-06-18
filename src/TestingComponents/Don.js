import React, { useState, useEffect, useRef } from "react";
import FirebaseSample from "../config/FirebaseSample";
import SearchField from "../components/base/SearchField/SearchField";
import ActiveListingCard from "../components/base/ActiveListingCard/ActiveListingCard";
import Badge from "../components/base/Badge/Badge";
import MapLeaflet from "../components/module/MapLeaflet/MapLeaflet";
import Autocomplete from "react-google-autocomplete";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import MapSearch from "../components/base/MapSearch/MapSearch";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SellerInfoCard from "../components/base/SellerInfoCard/SellerInfoCard";
import Grid from "../components/layout/Grid/Grid";
import useMediaQuery from "../utils/useMediaQuery";
import SelectDropdown from "../components/base/SelectDropdown/SelectDropdown";
import ImageLabel from "../components/base/ImageLabel/imageLabel";

const wrapper = {
  padding: "1rem",
};

const Don = (props) => {
  const [zoom, setZoom] = useState(100);
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);

  const data = [
    { id: 1, lat: 49.225, long: -123.107, location: "Langara" },
    { id: 2, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 3, lat: 49.19, long: -123.122, location: "Bridgeport" },
    { id: 4, lat: 49.19, long: -123.122, location: "Bridgeport" },
  ];

  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

  const [searchValue, setSearchValue] = useState("");

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 960px)");
  const isMobile = useMediaQuery("(min-width: 360px)");

  return (
    <div>
      <h1>Don</h1>
      <div>
        <FirebaseSample />
      </div>
      <div style={wrapper}>
        <SearchField
          placeholder="What are you looking for?"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          resetValue={() => setSearchValue("")}
        />
      </div>

      <div style={wrapper}>{/* <MapSearch /> */}</div>
      {/* <div style={wrapper}>
        <MapLeaflet
          style={{ height: "50rem", width: "50rem" }}
          zoom={zoom}
          markerData={data}
          direction="top"
          // permanent
        />
      </div> */}

      <div style={wrapper}>
        <Grid
          rows={2}
          columns={isDesktop ? 6 : isTablet ? 3 : isMobile ? 2 : "auto"}
          style={{ justifyItems: "center" }}
        >
          <div>Cell 1</div>
          <div>Cell 2</div>
          <div>Cell 3</div>
          <div>Cell 4</div>
          <div>Cell 5</div>
          <div>Cell 6</div>
          <div>Cell 7</div>
          <div>Cell 8</div>
          <div>Cell 9</div>
        </Grid>
      </div>

      <div style={wrapper}>
        <SelectDropdown
          options={options}
          placeholder="Search location.."
          clearable
          backspaceDelete
        />
      </div>
      <div style={wrapper}>
        <Badge
          label="Nearby"
          onClick={() => setSelected(!selected)}
          active={selected}
        />
        <Badge
          label="Price - High to Low"
          onClick={() => setSelected1(!selected1)}
          active={selected1}
        />
      </div>
      <div style={wrapper}>
        <ActiveListingCard
          distance={2}
          days={2}
          source="https://picsum.photos/400"
          itemname="Banana"
          price={1.25}
          stock={5}
          alt="Banana"
          onClick={() => console.log("activelistingcard")}
        />
        <ActiveListingCard
          distance={2}
          days={2}
          source="https://picsum.photos/400"
          itemname="Banana"
          price={1.25}
          stock={5}
          alt="Banana"
          onClick={() => console.log("activelistingcard")}
          maxWidth="250px"
          imageWidth="250px"
        />
        {/* <ImageLabel distance={2} days={1} /> */}
      </div>
    </div>
  );
};

export default Don;
