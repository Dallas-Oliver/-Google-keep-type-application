import React from "react";
import DeleteButton from "./DeleteButton";
import ConfirmDeleteItemMenu from "../Main_Components/ConfirmDeleteItemMenu";
import uuid from "uuid/v4";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/material.css";

class ToDoList extends React.Component {
  constructor() {
    super();

    this.state = {
      tippyVisible: false
    };
  }

  toggleTippy = event => {
    this.setState(
      prevState => ({
        tippyVisible: !prevState.tippyVisible
      }),
      () => {
        console.log(event);
      }
    );
  };

  render() {
    return (
      <ul className="list-container list-group">
        {this.props.items.map((item, index) => (
          <div className="list-item-div" key={uuid()}>
            <input
              type="checkbox"
              onClick={() => this.props.checkItems(index)}
              className="list-checkbox"
            ></input>
            <li className="list-item list-group-item li">{item}</li>
            <Tippy
              content={
                <ConfirmDeleteItemMenu
                  toggleTippy={this.toggleTippy}
                  deleteChecklistItem={() =>
                    this.props.deleteChecklistItem(index)
                  }
                  cancelDelete={null}
                />
              }
              interactive={true}
              trigger="click"
              visible={this.state.tippyVisible}
            >
              <DeleteButton onClick={this.toggleTippy} />
            </Tippy>

            {/* <div
              onClick={() => this.props.deleteChecklistItem(index)}
              className="list-item-edit-button"
            >
              x
            </div> */}
          </div>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
