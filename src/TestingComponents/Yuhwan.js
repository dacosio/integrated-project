import Dropdown from "../components/base/Dropdown/Dropdown";
import React, { useEffect, useState, useMemo } from "react";
import NumberInput from "../components/base/NumberInput/NumberInput";

const Yuhwan = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [first, setfirst] = useState(1);

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
      <div>
        {" "}
        <NumberInput
          inputNumber={first}
          setInputNumber={setfirst}
          maxValue={10}
        />
      </div>
    </div>
  );
};

export default Yuhwan;
