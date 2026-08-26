import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent Did mount called");
  }

  render() {
    console.log("parent render");

    return (
      <div className="about">
        <h1>About Section</h1>

        <h3>
          This is Namaste React
        </h3>

        <User
          name="Akshay Saini (function)"
          location="Patna"
        />

        <UserClass
          name="Akshay Saini (class)"
          location="Patna"
        />
      </div>
    );
  }
}

export default About;