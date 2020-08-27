import React, { Component } from "react";
import "../styles/Form.css";

export default class Form extends Component {
  state = {
    name: "",
    phoneNumber: "",
    errorMessage: "",
  };

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    const { name, phoneNumber } = this.state;
    e.preventDefault();
    if (name === "" && phoneNumber === "") {
      this.setState({
        errorMessage: "Please fill all area",
      });
      setTimeout(() => {
        this.setState({
          errorMessage: "",
        });
      }, 2000);
      return;
    }
    this.props.addContact({ name, phoneNumber, id: 1});
    this.setState({
      name: "",
      phoneNumber: "",
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <input
            name="name"
            id="name"
            onChange={this.handleInput.bind(this)}
            value={this.state.name}
            placeholder="Enter a name"
            autoComplete="off"
          />
          <br />
          <input
            name="phoneNumber"
            id="phoneNumber"
            onChange={this.handleInput.bind(this)}
            value={this.state.phoneNumber}
            placeholder="Enter a phone number"
            autoComplete="off"
          />
          <br />
          <p>{this.state.errorMessage}</p>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
