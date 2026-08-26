import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo : {

      }
    }

  }

  async componentDidMount() {
    // fetching random user data .. 
    const data = await fetch("https://randomuser.me/api/");
    const jsonData = await data.json();
    console.log(jsonData);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: akshaymarch7</h4>
      </div>
    );
  }
  
}

export default UserClass;
