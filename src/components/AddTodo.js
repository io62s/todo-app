import React, { PureComponent } from "react";

class AddTodo extends PureComponent {
  state = {
    text: "",
    id: ""
  };

  componentDidMount() {
    this.inputElement.focus();
  }

  setValue = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text.length) {
      this.props.addTodos(this.state);
    }
    this.inputElement.focus();

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="addTodo">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            ref={input => (this.inputElement = input)}
            value={this.state.text}
            onChange={this.setValue}
            className="inputTodo"
            type="text"
            placeholder="Enter Task..."
          />
          <button style={{ fontSize: "2rem" }}>
            <i className="fas fa-plus" />
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
