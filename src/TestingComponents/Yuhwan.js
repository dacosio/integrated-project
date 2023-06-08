import React, { useState } from "react";
import Button from "../components/base/Button/Button";
import Modal from "../components/base/Modal/Modal";

const Yuhwan = (props) => {
  const [visibility, setVisibility] = useState(false);

  const handleOnOpen = () => {
    setVisibility(true);
  };

  const handleOnClose = () => {
    setVisibility(false);
  };

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <Button label="Open" onClickHandler={handleOnOpen} />
      <Modal visibility={visibility} onClose={handleOnClose}>
        Hey
      </Modal>
    </div>
  );
};

export default Yuhwan;
