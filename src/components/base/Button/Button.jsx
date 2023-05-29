// import React from "react";
// import "./button.css";

/**
 * Primary UI component for user interaction
 */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary
//     ? "storybook-button--primary"
//     : "storybook-button--secondary";

//   const onClickHandler = () => console.log("I got click handler");
//   return (
//     <button
//       type="button"
//       className={["storybook-button", `storybook-button--${size}`, mode].join(
//         " "
//       )}
//       onClick={onClickHandler}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

import React, { useState } from "react";


const RadioButton = ({ onColorChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedOption(color);
    onColorChange(color); // Call the callback function in the parent component
  };

  return (
    <div>
        <input
          type="radio"
          value="red"
          checked={selectedOption === "red"}
          onChange={handleColorChange}
        />

  </div>
  );
}

export default RadioButton;