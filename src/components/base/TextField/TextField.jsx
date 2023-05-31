import React, { useState } from "react";

const TextField = (props) => {
  const {
    id,
    type,
    label,
    value = "",
    onChange = () => null,
    onChangeText = () => null,
    placeholder,
    secured,
    error = "",
    prefix,
    LeftComponent = null,
    className = undefined,
    onBlur = () => null,
    style,
    alert,
  } = props;

  const [showSecuredText, setShowSecuredText] = useState(false);

  const handleChange = (event) => {
    onChange(event);
    onChangeText(event.target.value);
  };

  const VisibilityIcon = showSecuredText ? <>eyeOffSvg</> : <>eyeOnSvg</>;
  const defaultInputType = type || "text";

  return (
    <div className={className} style={style}>
      <div>{label}</div>
      <div error={(error || "").length > 0}>
        {LeftComponent && <div>{LeftComponent}</div>}
        {prefix && <span>{prefix}</span>}
        <input
          id={id}
          type={secured && !showSecuredText ? "password" : defaultInputType}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default React.memo(TextField);
