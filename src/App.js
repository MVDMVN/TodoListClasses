import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { text: "Learn JS", key: 1, done: "not-done" },
        { text: "Learn React", key: 2, done: "not-done" },
        { text: "Learn Redux", key: 3, done: "not-done" },
        { text: "Do Something Interesting", key: 4, done: "not-done" },
      ],
      currentItem: {
        text: "",
        key: 1,
        done: "not-done",
      },
    };
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  };

  setIsTaskCompleted = (id) => {
    const taskId = this.state.items.findIndex((arg) => arg.key === id);
    const currentItem = {
      text: this.state.items[taskId].text,
      key: this.state.items[taskId].key,
      done: "done",
    };
    console.log(currentItem);
    const newTasksList = [
      ...this.state.items.slice(0, taskId),
      currentItem,
      ...this.state.items.slice(taskId + 1),
    ];
    this.setState({
      items: newTasksList,
    });
  };

  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: this.state.items.length + 1,
      done: "not-done",
    };
    this.setState({
      currentItem,
    });
  };
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "", done: "not-done" },
      });
    }
  };
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          setIsTaskCompleted={this.setIsTaskCompleted}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
