import React, { useState } from "react";
import Touchable from "../Touchable/Touchable";

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
  } = props;

  const [showSecuredText, setShowSecuredText] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const VisibilityIcon = showSecuredText ? <>eyeOffSvg</> : <>eyeOnSvg</>;
  const defaultInputType = type || "text";

  return (
    <div className={className} style={style}>
      <div className="typography">{label}</div>
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
        {secured && (
          <div className="visibility-container">
            <Touchable onClick={() => setShowSecuredText((v) => !v)}>
              <VisibilityIcon />
            </Touchable>
          </div>
        )}
      </div>
      {(error || "").length > 0 && (
        <div className="error typography" variant="caption" color="error">
          {error}
        </div>
      )}
    </div>
  );
};

export default React.memo(TextField);
