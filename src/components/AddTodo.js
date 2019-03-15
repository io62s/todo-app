import React, { PureComponent } from "react";
import * as Buttons from "./Styles/Buttons";
import { FormWrapper, Input } from "./Styles/AddFormStyle";

const { AddButton } = Buttons;

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
      <FormWrapper>
        <form
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          onSubmit={this.handleSubmit}
        >
          <Input
            ref={input => (this.inputElement = input)}
            value={this.state.text}
            onChange={this.setValue}
            type="text"
            placeholder="Enter Task..."
          />
          <AddButton>
            <i className="fas fa-plus" />
          </AddButton>
        </form>
      </FormWrapper>
    );
  }
}

export default AddTodo;
