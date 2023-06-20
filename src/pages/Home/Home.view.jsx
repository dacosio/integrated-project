import React from "react";

const Home = (props) => {
  const { user, handleLogOut } = props;

  console.log(user);
  return (
    <div>
<<<<<<< HEAD
      <h1>Home Screen</h1>
      {user && <button onClick={handleLogOut}>logout</button>}
=======
      {xl ? (
        <div className={style.desktopWrapper}>
          <Grid columns={7} gap="31px">
            <div className={style.picksDesktop}>
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
              <Grid columns={2} style={{ justifyItems: "center" }}>
                {data &&
                  data.slice(0, 4).map((d) => {
                    return (
                      <ActiveListingCard
                        key={d.id}
                        distance={2}
                        days={2}
                        source={`https://picsum.photos/400?random=${d.id}`}
                        itemname="Banana"
                        price={1.25}
                        stock={5}
                        alt="Banana"
                        onClick={() => console.log(d.id)}
                        maxwidth={lg ? "180px" : "150px"}
                        width={lg ? "180px" : "150px"}
                      />
                    );
                  })}
              </Grid>
              <Pagination
                currentPageIndex={currentPageIndex}
                pageNumber={pageNumber}
                totalPageNumber={totalPageNumber}
                onClick={handleOnClick}
              />
            </div>
            <div className={style.mapDesktop}>
              <MapLeaflet
                zoom={zoom}
                markerData={data}
                direction="top"
                // permanent
                width="100%"
                height="100%"
                borderRadius="20px"
                zIndex={2}
              />
            </div>
          </Grid>
        </div>
      ) : (
        <>
          <div>
            <MapLeaflet
              zoom={zoom}
              markerData={data}
              direction="top"
              // permanent
              width="100%"
              height="10rem"
              zIndex={2}
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
                      key={d.id}
                      distance={2}
                      days={2}
                      source={`https://picsum.photos/400?random=${d.id}`}
                      itemname="Banana"
                      price={1.25}
                      stock={5}
                      alt="Banana"
                      onClick={() => console.log(d.id)}
                      maxwidth={lg ? "180px" : "150px"}
                      width={lg ? "180px" : "150px"}
                    />
                  );
                })}
            </Grid>
          </div>
        </>
      )}
>>>>>>> cff3a55ccd583e56622dec5021b4fafeceeb5908
    </div>
  );
};

export default Home;
