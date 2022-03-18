import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`;

class App extends Component {
  state = {
    task: "",
    taskList: []
  };

  add = (event) => {
    const { task, taskList } = this.state;

    event.preventDefault();

    if (task === "") return;

    const newTask = {
      id: new Date(),
      text: task
    };

    this.setState({
      taskList: taskList.concat(newTask),
      task: ""
    }),
      console.log(this.state.taskList);
  };

  remove = (id) => {
    const { taskList } = this.state;

    this.setState({
      taskList: taskList.filter((item) => item.id !== id)
    });
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <input onChange={this.handleChange} value={this.state.task} />
          <button onClick={this.add}>add</button>
          <ul>
            {this.state.taskList.map((item) => (
              <li key={item.id}>
                {item.text}
                <button onClick={() => this.remove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
