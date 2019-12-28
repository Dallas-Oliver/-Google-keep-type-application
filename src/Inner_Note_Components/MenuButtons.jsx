import React, { forwardRef } from "react";

const MenuButtons = forwardRef((props, ref) => {
  return (
    <div onMouseEnter={props.toggleColorTippy} className="menu-div">
      <span
        onClick={() => props.deleteNote(props.index)}
        className=" menu-icon trash-icon far fa-trash-alt"
      />
      <span ref={ref} className="menu-icon palette-icon fas fa-palette"></span>
    </div>
  );
});

export default MenuButtons;
