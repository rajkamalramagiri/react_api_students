import React, { Component } from "react";

import axios from "axios";

class Get extends Component {
  state = { contacts: [] };
  componentDidMount() {
    //async call
    console.log("component did mount");
    axios.get("http://localhost:3004/contacts/").then((res) => {
      console.log("response", res);
      const responseData = res.data;
      this.setState({ contacts: responseData });
    });
  }

  render() {
    console.log("contacts", this.state.contacts);
    return (
      <div>
        <h2>Get component - My contacts</h2>
        {this.state.contacts.map((x) => (
          <li key={x.id}>
            {" "}
            {x.id} {x.name}
          </li>
        ))}
      </div>
    );
  }
}

export default Get;
