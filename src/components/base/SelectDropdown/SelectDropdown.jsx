import React, { useState } from "react";
import Select from "react-dropdown-select";
import "./selectDropdown.css";

const SelectDropdown = (props) => {
  const { options } = props;
  const [values, setValues] = useState([]);

  const style = {
    borderRadius: "10px",
    height: "32px",
    width: "100%",
    paddingLeft: "15px",
  };

  return (
    <div>
      <Select
        {...props}
        options={options}
        onChange={(values) => setValues(values)}
        style={style}
        dropdownGap={0}
        dropdownHeight="300px"
        backspaceDelete
      />
    </div>
  );
};

export default React.memo(SelectDropdown);
