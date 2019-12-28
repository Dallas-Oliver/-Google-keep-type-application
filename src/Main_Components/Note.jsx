import React from "react";
import NoteTitle from "../Inner_Note_Components/NoteTitle";
import CheckList from "./checkList";
import TextNote from "../Main_Components/TextNote";
// import ToDoList from "../Inner_Note_Components/ToDoList";
// import CheckedItemsList from "../Inner_Note_Components/CheckedItemsList";
import MenuButtons from "../Inner_Note_Components/MenuButtons";
import { GithubPicker } from "react-color";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/material.css";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      items: [],
      checkedItems: [],
      noteText: "",
      colorpaletteVisible: false,
      colorTippyVisible: false,
      noteColor: "#fff",
      textColor: "#808080",
      darkModeColors: [
        "#b80000",
        "#db3e00",
        "#BA980D",
        "#008b02",
        "#006b76",
        "#488EFF",
        "#004dcf",
        "#5300eb"
      ],
      lightModeColors: [
        "#eb9694",
        "#fad0c3",
        "#fef3bd",
        "#c1e1c5",
        "#bedadc",
        "#c4def6",
        "#bed3f3",
        "#d4c4fb"
      ]
    };
  }

  onSubmit = event => {
    event.preventDefault();

    if (this.state.item.text === "") {
      return;
    }

    this.setState({
      items: [...this.state.items, this.state.item],
      item: ""
    });
  };

  checkItems = index => {
    //create a new array and store the current state of the items array
    let items = [...this.state.items];
    //remove one item from the new array and store it inside the removedItem variable
    let removedItem = items.splice(index, 1);

    //create a new array and store the current state of the deletedItems array
    let newCheckedItems = [...this.state.checkedItems];
    //push the content of the removedItem variable to the new array
    newCheckedItems.push(removedItem);
    newCheckedItems.flat();

    this.setState({
      items: items,
      checkedItems: newCheckedItems
    });
  };

  uncheckItems = index => {
    let deletedItems = [...this.state.checkedItems];
    const uncheckedItem = deletedItems.splice(index, 1);

    let newItems = [...this.state.items];
    newItems.push(uncheckedItem);
    newItems.flat();

    this.setState({ items: newItems, checkedItems: deletedItems });
  };

  NoteColorChangeHandler = color => {
    console.log(this.props.darkMode);
    this.setState({
      noteColor: color.hex
    });
  };

  deleteChecklistItem = index => {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    return (
      <div className="container-div">
        <div
          className="full-note"
          style={
            this.props.darkMode
              ? {
                  backgroundColor: "inherit",
                  color: "whiteSmoke",
                  borderColor: "whiteSmoke"
                }
              : {
                  backgroundColor: this.state.noteColor || "inherit",
                  color: "black",
                  borderColor: "#808080"
                }
          }
        >
          <NoteTitle />
          {this.props.noteType === "checklist" ? (
            <CheckList
              items={this.state.items}
              item={this.state.item}
              onChange={e => this.setState({ item: e.target.value })}
              checkItems={this.checkItems}
              checkedItems={this.state.checkedItems}
              onSubmit={this.onSubmit}
              uncheckItems={this.uncheckItems}
              deleteChecklistItem={this.deleteChecklistItem}
            />
          ) : (
            <TextNote />
          )}

          <Tippy
            content={
              <GithubPicker
                width="112px"
                triangle="hide"
                colors={
                  this.props.darkMode
                    ? this.state.darkModeColors
                    : this.state.lightModeColors
                }
                color={this.state.noteColor}
                onChangeComplete={this.NoteColorChangeHandler}
              />
            }
            interactive="true"
            theme="invisible"
            hideOnClick="false"
            maxWidth="112"
            visible={this.state.colorTippyVisible}
          >
            <MenuButtons toggleColorTippy={this.toggleColorTippy} deleteNote={this.props.deleteNote} />
          </Tippy>
        </div>
      </div>
    );
  }
}

export default Note;
