// import React from "react";
// import TextField from "./TextField";
// import { within, userEvent } from "@storybook/testing-library";
// // import PropTypes from "prop-types";

// // TextField.propTypes = {
// //   label: PropTypes.string.isRequired,
// //   id: PropTypes.string,
// //   type: PropTypes.string,
// //   value: PropTypes.string,
// //   onChange: PropTypes.func,
// //   onChangeText: PropTypes.func,
// //   placeholder: PropTypes.string,
// //   secured: PropTypes.bool,
// //   error: PropTypes.string,
// //   prefix: PropTypes.string,
// //   LeftComponent: PropTypes.string,
// //   className: PropTypes.string,
// //   onBlur: PropTypes.func,
// //   style: PropTypes.string,
// // };

// export default {
//   title: "Base/TextField",
//   component: TextField,
//   //   tags: ["autodocs"],
//   //   args: {
//   //     label: "TextField",
//   //   },
//   //   argTypes: {
//   //     backgroundColor: { control: "color" },
//   //   },
// };

// const Template = (args) => <TextField {...args} />;

// export const Email = Template.bind({});
// Email.play = async ({canvasElement}) => {
//     const canvas = within(canvasElement)

// }

import React, { useState } from "react";
// import { Meta, Story } from '@storybook/react';
import TextField from "./TextField";

export default {
  title: "Base/TextField",
  component: TextField,
};

export const Default = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <TextField value={value} handleChange={(e) => setValue(e.target.value)} />
  );
};

Default.args = {
  label: "Username",
  placeholder: "Enter your username",
};

export const WithError = (args) => <TextField {...args} />;
WithError.args = {
  label: "Password",
  placeholder: "Enter your password",
  error: "Invalid password",
};
