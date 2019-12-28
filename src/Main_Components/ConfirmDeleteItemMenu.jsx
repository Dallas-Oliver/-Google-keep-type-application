import React from "react";
import DropDown from "./DropDown";

function ConfirmDeleteItemMenu(props) {
  return (
    <div onClick={props.toggleTippy}>
      <p>Are you sure?</p>
      <DropDown
        menuListClassName="settings-menu-list"
        liClassName="settings-item"
        pClassName="settings-toggle"
        firstItem={"Yes"}
        onClickFirstItem={() => props.deleteChecklistItem}
        secondItem={"No"}
        onClickSecondItem={props.cancelDelete}
      />
    </div>
  );
}

export default ConfirmDeleteItemMenu;
