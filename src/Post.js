import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = { id: "", name: "" };
  handleSubmit = () => {
    axios
      .delete("http://localhost:3004/contacts/" + this.state.id)
      .then((res) => {
        console.log("post response", res);
        if (res.status == 200) alert("contact updated successfully");
        else alert("error");
      });
  };
  render() {
    return (
      <div>
        <h2>post</h2>
        <label>Enter id</label>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ id: e.target.value });
          }}
          value={this.state.id}
        ></input>
        <br />
        <label>Enter name</label>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          value={this.state.name}
        ></input>
        <br />
        <button onClick={this.handleSubmit}>Add Contact</button>
      </div>
    );
  }
}

export default Post;
