import React, { useState } from "react";
import TimePicker from "../components/base/TimePicker/TimePicker";

const Yuhwan = (props) => {
  const [first, setfirst] = useState("");

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <TimePicker time={first} setTime={setfirst}></TimePicker>
      <div>{first}</div>
    </div>
  );
};

export default Yuhwan;
