import React, { useEffect, useState } from "react";
import NumberInput from "../components/base/NumberInput/NumberInput";

const Yuhwan = (props) => {
  const [first, setfirst] = useState(0);

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
          maxValue={10}
        />
        <div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Yuhwan;
