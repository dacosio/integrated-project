import React from "react";
import Typography from "../components/base/Typography/Typography";

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
        <Typography className="button-regular">button-regular</Typography>
        <hr />
      </section>
    </div>
  );
};

export default Yuki;
