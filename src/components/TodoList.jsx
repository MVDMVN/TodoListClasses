import React, { Component } from "react";

class TodoList extends Component {
  inputElement = React.createRef();
  componentDidUpdate() {
    this.inputElement.current.focus();
  }
  render() {
    return (
      <div className="app">
        <div className="todo-list__header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Задача"
              ref={this.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Добавить </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
