import React from "react";

const CheckedItems = props => {
  return (
    <div className="checked-items">
      <p className="finished-text">
        <strong>Finished Tasks</strong>
      </p>
      <hr className="item-line" />
      <ul className="checked-items-list">
        {props.checkedItems.map((item, index) => (
          <div className="list-item-div" key={index}>
            <input
              type="checkbox"
              checked
              readOnly
              onClick={() => props.uncheckItems(index)}
              className="list-checkbox"
            ></input>
            <li className="checked-item list-item list-group-item list-group-item-action li">
              {item}
            </li>
            <hr className="item-line" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CheckedItems;
