import React from "react";
import Typography from "../components/base/Typography/Typography";

const typographyStyles = {
  h1: {
    fontSize: "40px",
    fontFamily: "Graphik Bold",
  },
  h2: {
    fontSize: "32px",
    fontFamily: "Graphik Bold",
  },
  h3: {
    fontSize: "28px",
    fontFamily: "Graphik Bold",
  },
  h4: {
    fontSize: "16px",
    fontFamily: "Graphik Bold",
  },
  body1: {
    fontSize: "16px",
    fontFamily: "Graphik Medium",
  },
  body2: {
    fontSize: "16px",
    fontFamily: "Graphik Regular",
  },
  body3: {
    fontSize: "12px",
    fontFamily: "Graphil Medium",
  },
  body4: {
    fontSize: "12px",
    fontFamily: "Graphik Regular",
  },
  button: {
    fontSize: "16px",
    fontFamily: "Graphik Semiold",
  },
};

const Yuki = () => {
  return (
    <div>
      <section>
        <h1 style={{ textDecoration: "underline" }}>Yuki</h1>
        <h3>Typography</h3>
        <div style={typographyStyles.h1}>heading 1</div>
        <div style={typographyStyles.h2}>heading 2</div>
        <div style={typographyStyles.h3}>heading 3</div>
        <div style={typographyStyles.h4}>heading 4</div>
        <div style={typographyStyles.body1}>Body 1</div>
        <div style={typographyStyles.body2}>Body 2</div>
        <div style={typographyStyles.body3}>Body 3</div>
        <div style={typographyStyles.body4}>Body 4</div>
        <div style={typographyStyles.button}>Button</div>
        <hr />
      </section>
    </div>
  );
};

export default Yuki;
