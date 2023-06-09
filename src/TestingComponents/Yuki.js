import React from "react";
import Typography from "../components/base/Typography/Typography";

const typographyStyles = {
  title1: {
    fontSize: "62px",
    lineHeight: "72px",
  },
  title2: {
    fontSize: "48px",
    lineHeight: "56px",
  },
  title3: {
    fontSize: "40px",
    lineHeight: "48px",
  },
  title4: {
    fontSize: "32px",
    lineHeight: "40px",
  },
  title5: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  body: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  label: {
    fontSize: "14px",
    lineHeight: "24px",
  },
  caption: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  small: {
    fontSize: "10px",
    lineHeight: "12px",
  },
  overline: {
    fontSize: "11px",
    lineHeight: "12px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
};

const Yuki = () => {
  return (
    <div>
      <section>
        <h1 style={{ textDecoration: "underline" }}>Yuki</h1>
        <h3>Typography</h3>
        <div style={typographyStyles.title2}>title2</div>
        <div style={typographyStyles.overline}>overline</div>
        <div style={typographyStyles.small}>small</div>
        <div style={typographyStyles.label}>label</div>
        <hr />
      </section>
    </div>
  );
};

export default Yuki;
