import React, { Component } from "react";
import "../styles/List.css";
export default class list extends Component {
  state = {
    filteredText: "",
  };

  filterContacts(e) {
    const filteredText = e.target.value.toLowerCase();
    this.setState({
      filteredText,
    });
  }

  removeContact(id){
    this.props.removeContact(id);
  }

  render() {

    const filteredContacts = this.props.contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(this.state.filteredText) ||
        contact.phoneNumber.toLowerCase().includes(this.state.filteredText)
    );

    return (
      <div className="list-area">
        <input
          id="filter"
          type="text"
          onChange={this.filterContacts.bind(this)}
          placeholder="Filter by name or phone number"
        />
        <ul>
          <li>
            <span><b>Name</b></span>
            <span><b>Phone Number</b></span>
            <span><b>Remove</b></span>
          </li>
          {    console.log(filteredContacts)}
          {filteredContacts.length === 0 ? (<li>No saved contact</li>) : '' }
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span>
                <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
              </span>
              <button className='remove' onClick={() => this.removeContact(contact.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
