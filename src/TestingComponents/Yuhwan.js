import React, { useEffect, useMemo, useState } from "react";
import Dropdown from "../components/base/Dropdown/Dropdown";

const Yuhwan = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = useMemo(
    () => [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
    ],
    []
  );

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <Dropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
        label="Select an option"
      ></Dropdown>
    </div>
  );
};

export default Yuhwan;
