import React, { Component } from "react";
import Note from "./Main_Components/Note";
import "./App.css";
import uuid from "uuid/v4";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/material.css";
import SettingsMenu from "./Main_Components/SettingsMenu";
import ChooseNoteMenu from "./Main_Components/ChooseNoteMenu";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      darkModeEnabled: false,
      settingsMenuVisible: false,
      NoteMenuVisible: false
    };
  }

  createNote = noteType => {
    const newNote = {
      id: uuid(),
      noteType: noteType
    };

    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(newNote)
      };
    });
  };

  // sendNoteHandler = async note => {
  //   console.log(note);
  //   const newNote = {

  //   }
  // };

  deleteNote = id => {
    let duplicateArray = [...this.state.notes];

    const newNotes = duplicateArray.filter(note => note.id !== id);

    this.setState({
      notes: newNotes
    });
  };

  toggleDarkMode = () => {
    this.setState({ darkModeEnabled: !this.state.darkModeEnabled }, () => {
      console.log(this.state.darkModeEnabled);
    });
  };

  toggleNoteMenuTippy = () => {
    this.setState(prevState => ({
      NoteMenuVisible: !prevState.NoteMenuVisible
    }));
  };

  toggleSettingsTippy = () => {
    this.setState(prevState => ({
      settingsMenuVisible: !prevState.settingsMenuVisible
    }));
  };

  darkModeStyling = {
    backgroundColor: "#383838",
    color: "white"
  };

  lightModeStyling = {
    backgroundColor: "whiteSmoke"
  };

  render() {
    return (
      <div
        className="App-body"
        style={
          this.state.darkModeEnabled
            ? this.darkModeStyling
            : this.lightModeStyling
        }
      >
        <div className="header">
          {/* <button onClick={this.createNote} className="btn btn-warning btn-sm">
            New Note
          </button> */}
          <Tippy
            content={
              <ChooseNoteMenu
                toggleNoteMenuTippy={this.toggleNoteMenuTippy}
                createTextNote={() => this.createNote("text note")}
                createCheckListNote={() => this.createNote("checklist")}
              />
            }
            arrow={false}
            boundary={"viewport"}
            trigger="click"
            interactive
            theme="light"
            visible={this.state.NoteMenuVisible}
          >
            <div>
              <button
                onClick={this.toggleNoteMenuTippy}
                className="btn btn-warning btn-sm"
              >
                Add a Note
              </button>
            </div>
          </Tippy>

          <div>
            <Tippy
              arrow={false}
              boundary={"viewport"}
              content={
                <SettingsMenu
                  toggleSettingsTippy={this.toggleSettingsTippy}
                  toggleDarkMode={this.toggleDarkMode}
                  darkModeEnabled={this.state.darkModeEnabled}
                />
              }
              interactive
              trigger="click"
              visible={this.state.settingsMenuVisible}
            >
              <div>
                <span
                  onClick={this.toggleSettingsTippy}
                  className="fas fa-cog settings-icon"
                ></span>
              </div>
            </Tippy>
          </div>
        </div>
        <hr className="header-bottom-line" />
        <ul className="saved-notes">
          {this.state.notes.map(item => {
            // this.sendNoteHandler(item);
            return (
              <Note
                noteType={item.noteType}
                darkMode={this.state.darkModeEnabled}
                deleteNote={() => this.deleteNote(item.id)}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
