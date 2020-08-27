import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
export default class Contacts extends Component {
  componentWillMount() {
    let contacts = [];
    if (localStorage.getItem("contacts")) {
      console.log("fasds");
      contacts = JSON.parse(localStorage.getItem("contacts"));
    }

    this.setState({
      contacts,
    });
  }

  addContact = (contact) => {
 
    if(this.state.contacts !== []){
      contact.id = this.state.contacts.length + 1;
    }
    const contacts = [...this.state.contacts, contact];
    localStorage.setItem("contacts", JSON.stringify(contacts));
    this.setState({
      contacts,
    });
  };

  removeContact =(id) => {
    const contacts = this.state.contacts.filter(contact => id !== contact.id)
    localStorage.setItem("contacts", JSON.stringify(contacts));
    this.setState({
      contacts
    })

  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <List contacts={this.state.contacts} removeContact={this.removeContact}/>
        <h2>Add New Contact</h2>
        <Form addContact={this.addContact} />
      </div>
    );
  }
}
