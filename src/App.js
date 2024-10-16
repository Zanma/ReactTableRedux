import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponents";
import JumbotronComponent from "./components/JumbotronComponents";

export default class App extends Component {
  state = {
    title: "Hello World 123",
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
      </div>
    );
  }
}
