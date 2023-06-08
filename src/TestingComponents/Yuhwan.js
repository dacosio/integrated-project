import React, { useState } from "react";
import Checkbox from "../components/base/Checkbox/Checkbox";

const Yuhwan = (props) => {
  const [first, setfirst] = useState([]);

  const options = [
    { value: "cylvia", label: "Cylvia" },
    { value: "don", label: "Don" },
    { value: "yuhwan", label: "Yuhwan" },
    { value: "yuki", label: "Yuki" },
  ];

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <div>{first.toString()}</div>
      <Checkbox
        selectedOptions={first}
        setSelectedOptions={setfirst}
        options={options}
      />
    </div>
  );
};

export default Yuhwan;
