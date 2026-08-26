import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
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
      <div>
        <h1>About Section</h1>
        <h3>This is Namaste React</h3>
        {/* <User name={"Akshay Saini (function) "} /> */}
        <UserClass name={"Akshay Saini (class) "} location={"patna"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Section</h1>
//       <h3>This is Namaste React</h3>
//       <User name={"Akshay Saini (function) "} />
//       <UserClass name={"Akshay Saini (class) "} location={"patna"} />
//     </div>
//   );
// };

export default About;
