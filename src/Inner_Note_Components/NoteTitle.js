import React from "react";
import ContentEditable from "react-contenteditable";

class NoteTitle extends React.Component {
  constructor() {
    super();
    this.ContentEditable = React.createRef();
    this.state = {
      html: "<input spellcheck='false' placeholder='title'></input>"
    };
  }

  handleChange = e => {
    this.setState({ html: e.target.value });
  };

  render() {
    return (
      <ContentEditable
        className="note-title"
        innerRef={this.ContentEditable}
        html={this.state.html}
        onChange={this.handleChange}
        disabled
      />
    );
  }
}

export default NoteTitle;
