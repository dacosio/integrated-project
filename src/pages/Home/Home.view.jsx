import React, { useState } from "react";
import MapLeaflet from "../../components/module/MapLeaflet/MapLeaflet";
import style from "./Home.module.css";
import Typography from "../../components/base/Typography/Typography";
import { MapMarkerSVG } from "../../components/base/SVG";
import Grid from "../../components/layout/Grid/Grid";
import ActiveListingCard from "../../components/base/ActiveListingCard/ActiveListingCard";

const Home = (props) => {
  const { user, handleLogOut, data, columns, lg } = props;
  const [zoom, setZoom] = useState(100);

  return (
    <div>
      <h1>Home Screen</h1>
      {user && <button onClick={handleLogOut}>logout</button>}

      <div>
        <MapLeaflet
          zoom={zoom}
          markerData={data}
          direction="top"
          // permanent
          width="100%"
          height="10rem"
        />
      </div>
      <div className={style.resultsWrapper}>
        <div className={style.title}>
          <Typography variant="h2-graphik-bold" color="black">
            Picks Near You
          </Typography>
        </div>
        <div className={style.location}>
          <MapMarkerSVG width={16} height={24} />
          <Typography variant="body-4-regular" color="dark-blue">
            100 2 49th Avenue, Vancouver, BC V5Y 276
          </Typography>
        </div>

        <Grid columns={columns} style={{ justifyItems: "center" }}>
          {data &&
            data.map((d) => {
              return (
                <ActiveListingCard
                  distance={2}
                  days={2}
                  source={`https://picsum.photos/400?random=${d.id}`}
                  itemname="Banana"
                  price={1.25}
                  stock={5}
                  alt="Banana"
                  onClick={() => console.log("activelistingcard")}
                  maxWidth={lg ? "180px" : "150px"}
                  imageWidth={lg ? "180px" : "150px"}
                />
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
