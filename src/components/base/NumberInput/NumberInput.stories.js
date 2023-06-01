import NumberInput from "./NumberInput";

export default {
  title: "Base/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  args: {
    minValue: 0,
    currentValue: 1,
    maxValue: 5,
    step: 1,
    onChange: (value) => console.log(value),
  },
  argTypes: {},
};

export const Base = {};
