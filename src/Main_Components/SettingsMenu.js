import React from "react";
import DropDown from "./DropDown";

function SettingsMenu(props) {
  return (
    <div onClick={props.toggleSettingsTippy}>
      <DropDown
        menuListClassName="settings-menu-list"
        liClassName="settings-item"
        pClassName="settings-toggle"
        firstItem={
          props.darkModeEnabled === true
            ? "Disable Dark Mode"
            : "Enable Dark Mode"
        }
        onClickFirstItem={props.toggleDarkMode}
        secondItem={"item 2"}
      />
    </div>
  );
}

export default SettingsMenu;

/* <ul className="settings-menu-list">
        <li id="darkmode-settings-item" className="settings-item">
          <p
            id="dark-mode-indicator"
            onClick={props.toggleDarkMode}
            className="settings-toggle"
          >
            {props.darkModeEnabled === true
              ? "Disable Dark Mode"
              : "Enable Dark Mode"}
          </p>
        </li>
        <li className="settings-item">item2</li>
      </ul> */
