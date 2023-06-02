import React, { useEffect, useState } from "react";
import NumberInput from "./NumberInput";

export default {
  title: "Base/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export const Base = () => {
  const [inputNumber, setInputNumber] = useState(4);

  useEffect(() => {
    console.log(inputNumber);
  }, [inputNumber]);

  return (
    <NumberInput
      inputNumber={inputNumber}
      setInputNumber={setInputNumber}
      minValue={-5}
      maxValue={10}
      step={2}
    ></NumberInput>
  );
};
