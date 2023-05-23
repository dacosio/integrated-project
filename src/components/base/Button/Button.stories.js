import { Button } from "./Button";
import PropTypes from "prop-types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "md",
  onClick: () => {
    console.log("Button");
  },
};

export default {
  title: "Base/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    onClick: () => console.log("this.props.primary"),
  },
};

export const Secondary = {};

export const Large = {
  args: {
    size: "lg",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};
export const Red = {
  args: {
    size: "sm",
    backgroundColor: "red",
  },
  argTypes: {
    backgroundColor: {
      control: "inline-radio",
      options: ["red", "green", "blue"],
    },
  },
};
