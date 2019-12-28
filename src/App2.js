import React, { useState } from "react";
import Note from "./Main_Components/Note";
import "./App.css";
import uuid from "uuid/v4";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import SettingsMenu from "./Main_Components/SettingMenu";

const App = props => {
  // const [state, setState] = useState({
  //   notes: [],
  //   darkModeEnabled: false
  // });

  const [notes, editNotesList] = useState([]);
  const [darkModeEnabled, toggleDarkMode] = useState(false);

  const createNote = () => {
    const newNote = {
      id: uuid()
    };
    editNotesList(notes.concat(newNote));

    // setState(prevState => {
    //   return { notes: prevState.notes.concat(newNote) };
    // });
  };

  const deleteNote = id => {
    let duplicateArray = [...notes];

    const newNotes = duplicateArray.filter(note => note.id !== id);
    editNotesList({ notes: newNotes });

    // setState({
    //   notes: newNotes
    // });
  };

  // const toggleDarkMode = () => {
  //   setState({ darkModeEnabled: !state.darkModeEnabled }, () => {
  //     console.log(state.darkModeEnabled);
  //   });
  // };

  return (
    <div className="App-body">
      <div className="header">
        <button onClick={createNote} className="btn btn-warning btn-sm">
          New Note
        </button>
        <div>
          <Tippy
            arrow={false}
            boundary={"viewport"}
            content={
              <SettingsMenu
                toggleDarkMode={() =>
                  toggleDarkMode({
                    darkModeEnabled: !darkModeEnabled
                  })
                }
                darkModeEnabled={darkModeEnabled}
              />
            }
            interactive
            trigger="click"
          >
            <span className="fas fa-cog settings-icon"></span>
          </Tippy>
        </div>
        {/* <label>
            <input
              className="darkmode-toggle"
              type="checkbox"
              onChange={toggleDarkMode}
            />
            Dark Mode
          </label> */}
      </div>
      <hr className="header-bottom-line" />
      <ul className="saved-notes">
        {notes.map(item => {
          return (
            <Note
              darkMode={darkModeEnabled}
              deleteNote={() => deleteNote(item.id)}
              key={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
