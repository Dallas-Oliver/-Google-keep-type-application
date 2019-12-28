import React, { Component } from "react";
import ToDoList from "../Inner_Note_Components/ToDoList";
import CheckedItemsList from "../Inner_Note_Components/CheckedItemsList";

class CheckList extends Component {
  render() {
    return (
      <div>
        <ToDoList
          checkItems={this.props.checkItems}
          items={this.props.items}
          deleteChecklistItem={this.props.deleteChecklistItem}
        />
        <form className="form">
          <div className="form-group">
            <input
              autoFocus
              placeholder={
                this.props.items.length === 0 ? "New Item..." : "Add an Item..."
              }
              className="form-control input-one"
              value={this.props.item}
              onChange={this.props.onChange}
            />
            <button
              className="btn btn-light btn-sm"
              onClick={this.props.onSubmit}
            >
              Add
            </button>
          </div>
        </form>
        {this.props.checkedItems.length > 0 ? (
          <CheckedItemsList
            uncheckItems={this.props.uncheckItems}
            checkedItems={this.props.checkedItems}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default CheckList;
