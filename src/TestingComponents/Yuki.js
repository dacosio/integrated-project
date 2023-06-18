import React from "react";
import Typography from "../components/base/Typography/Typography";
import MeetUpInfoCard from "../components/base/MeetUpInfoCard/MeetUpInfoCard";

const Yuki = () => {
  return (
    <div>
      <section>
        <h1 style={{ textDecoration: "underline" }}>Yuki</h1>
        <h3>Typography</h3>
        <Typography className="h1-graphik-bold">h1-graphik-bold</Typography>
        <Typography className="h2-graphik-bold">h2-graphik-bold</Typography>
        <Typography className="h3-graphik-bold">h3-graphik-bold</Typography>
        <Typography className="h4-graphik-bold">h4-graphik-bold</Typography>
        <Typography className="body-1-regular">body-1-regular</Typography>
        <Typography className="body-2-regular">body-2-regular</Typography>
        <Typography className="body-3-regular">body-3-regular</Typography>
        <Typography className="body-4-regular">body-4-regular</Typography>
        <Typography className="button-regular" style={{ color: "var(--gray)" }}>
          button-regular
        </Typography>
        <Typography
          className="button-regular"
          style={{ color: "var(--light-gray)" }}
        >
          button-regular
        </Typography>
        <Typography
          className="button-regular"
          style={{ color: "var(--dark-blue)" }}
        >
          button-regular
        </Typography>
        <Typography className="button-regular" style={{ color: "var(--blue)" }}>
          button-regular
        </Typography>
        <Typography
          className="button-regular"
          style={{ color: "var(--light-blue)" }}
        >
          button-regular
        </Typography>
        <Typography
          className="button-regular"
          style={{ color: "var(--yellow)" }}
        >
          button-regular
        </Typography>
        <Typography
          className="button-regular"
          style={{ color: "var(--black)" }}
        >
          button-regular
        </Typography>
        <Typography
          className="button-regular"
          style={{ color: "var(--white)", backgroundColor: "black" }}
        >
          button-regular
        </Typography>
        <div>
          <MeetUpInfoCard 
            date="Jun 23, 2023"
            time="14:00"
            location="100 W 49th Ave, Vancouver,
            BC V5Y 2Z6"
          />
        </div>

        <hr />
      </section>
    </div>
  );
};

export default Yuki;
