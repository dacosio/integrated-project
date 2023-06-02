import Button from "./Button";

export default {
  title: "Base/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    primary: true,
    block: false,
    size: "md",
    onClick: () => console.log("Button"),
    label: "Button",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {};

export const Secondary = {
  args: {
    primary: false,
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const SmallBlock = {
  args: {
    size: "sm",
    block: true,
  },
};

export const MediumBlock = {
  args: {
    size: "md",
    block: true,
  },
};

export const LargeBlock = {
  args: {
    size: "lg",
    block: true,
  },
};

export const Orange = {
  args: {
    size: "md",
    backgroundColor: "orange",
    color: "#333",
  },
};
