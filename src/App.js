import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponents";
import JumbotronComponent from "./components/JumbotronComponents";
import TableComponents from "./components/TableComponents";

export default class App extends Component {
  state = {
    title: "Hello World 123",
    users: [
      {
        id: 1,
        name: "John Doe",
        alamat: "Jakarta",
        umur: 20,
        nohp: "08123456789",
      },
      {
        id: 2,
        name: "Jane Doe 2",
        alamat: "Jakarta 1",
        umur: 20,
        nohp: "08123456789",
      },
      {
        id: 3,
        name: "John Doe 3",
        alamat: "Jakarta 3",
        umur: 20,
        nohp: "08123456789",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <TableComponents user={this.state.users} />
      </div>
    );
  }
}
