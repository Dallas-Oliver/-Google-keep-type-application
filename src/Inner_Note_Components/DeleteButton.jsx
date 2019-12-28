import React, { forwardRef } from "react";

const DeleteButton = forwardRef((props, ref) => {
  return (
    <div ref={ref} onClick={props.onClick} className="list-item-edit-button">
      x
    </div>
  );
});

export default DeleteButton;
