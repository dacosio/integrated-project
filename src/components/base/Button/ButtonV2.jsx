import React, { useEffect } from "react";
import { useState } from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */

export const ButtonV2 = () => {
  const [followState, setFollowState] = useState(false);
  function classNames(...args) {
    return args.filter(Boolean).join(" ");
  }

  return (
    <button
      type="button"
      className={classNames("btn", followState ? "follow-btn" : "unfollow-btn")}
      onClick={() => setFollowState(!followState)}
    >
      {followState ? "Follow" : "Unfollow"}
    </button>
  );
};
