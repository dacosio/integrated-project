import React from "react";
import { useState } from "react";

const FilterModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default FilterModal;
