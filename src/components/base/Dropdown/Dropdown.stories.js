import Dropdown from "./Dropdown";

Dropdown.defaultProps = {
  options: [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
  ],
  onChange: (value) => {
    console.log(value);
  },
};

export default {
  title: "Base/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  options: [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
  ],
  onChange: (value) => {
    console.log(value);
  },
};

export const Base = {};
