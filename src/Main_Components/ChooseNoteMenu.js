import React from "react";
import DropDown from "./DropDown";

class ChooseNoteMenu extends React.Component {
  render() {
    return (
      <div onClick={this.props.toggleNoteMenuTippy}>
        <DropDown
          menuListClassName="settings-menu-list"
          liClassName="settings-item"
          pClassName="settings-toggle"
          firstItem={"CheckList"}
          onClickFirstItem={this.props.createCheckListNote}
          secondItem={"Note"}
          onClickSecondItem={this.props.createTextNote}
        />
      </div>
    );
  }
}

export default ChooseNoteMenu;
