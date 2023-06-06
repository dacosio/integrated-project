import React, { useState } from "react";
import DatePicker from "../components/base/DatePicker/DatePicker";

const Yuhwan = (props) => {
  const [first, setfirst] = useState("");

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <DatePicker date={first} setDate={setfirst}></DatePicker>
      <div>{first}</div>
    </div>
  );
};

export default Yuhwan;
