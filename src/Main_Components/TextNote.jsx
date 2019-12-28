import React from "react";
import ContentEditable from "react-contenteditable";

class TextNote extends React.Component {
  constructor() {
    super();

    this.ContentEditable = React.createRef();
    this.state = {
      html:
        " <textarea value={this.props.noteText} rows='8' cols='300' placeholder='Take a note...' className='note-text-area'></textarea>"
    };
  }

  handleChange = e => {
    this.setState({ html: e.target.value });
  };

  render() {
    return (
      <div className="text-area-container">
        <ContentEditable
          innerRef={this.ContentEditable}
          html={this.state.html}
          onChange={this.handleChange}
          disabled
        />
      </div>
    );
  }
}

export default TextNote;
