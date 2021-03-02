import React, { Component } from "react";

class TodoItems extends Component {
  createTasks = (item) => {
    let isItemDone = item.done;
    return (
      <li className={isItemDone} key={item.text}>
        {item.text}
        <div>
          <button onClick={() => this.props.setIsTaskCompleted(item.key)}>
            Done
          </button>
          <button onClick={() => this.props.deleteItem(item.key)}>X</button>
        </div>
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <ul className="todo-list">{listItems}</ul>;
  }
}

export default TodoItems;
