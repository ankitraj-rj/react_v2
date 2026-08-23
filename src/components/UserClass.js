import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Bihar</h3>
        <h4>Contact: akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
