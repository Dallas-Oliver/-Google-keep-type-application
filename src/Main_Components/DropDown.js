import React from "react";

const DropDown = props => {
  return (
    <ul className={props.menuListClassName}>
      <li id={props.id} className={props.liClassName}>
        <p onClick={props.onClickFirstItem} className={props.pClassName}>
          {props.firstItem}
        </p>
      </li>
      <li className={props.liClassName}>
        <p onClick={props.onClickSecondItem} className={props.pClassName}>
          {props.secondItem}
        </p>
      </li>
    </ul>
  );
};

export default DropDown;
