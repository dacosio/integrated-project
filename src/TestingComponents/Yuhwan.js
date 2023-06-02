import React, { useEffect, useState } from "react";
import NumberInput from "../components/base/NumberInput/NumberInput";

const Yuhwan = (props) => {
  const [first, setfirst] = useState(4);

  useEffect(() => {
    console.log(first);
  }, [first]);

  return (
    <>
      <div>
        <h1>Yuhwan</h1>
        <div>Test here</div>
        <NumberInput
          inputNumber={first}
          setInputNumber={setfirst}
          minValue={-5}
          maxValue={10}
          step={2}
        ></NumberInput>
      </div>
    </>
  );
};

export default Yuhwan;
