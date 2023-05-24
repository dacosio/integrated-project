import React from "react";
import { useState } from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ isFollowed }) => {
  const [followState, setFollowState] = useState(isFollowed);

  let mode;
  let label;
  let onClickHandler;

  if (followState) {
    mode = "follow-btn";
    label = "Follow";
    onClickHandler = () => {
      setFollowState(!followState);
    };
  } else {
    mode = "unfollow-btn";
    label = "Unfollow";
    onClickHandler = () => {
      setFollowState(!followState);
    };
  }

  return (
    <button
      type="button"
      className={["btn", mode].join(" ")}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};
