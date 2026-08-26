import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://randomuser.me/api/");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData.results[0],
    });
  }

  render() {
    if (this.state.userInfo === null) {
      return <h2>Loading...</h2>;
    }

    const { name, location, gender, picture } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={picture.large} alt={`${name.first} ${name.last}`} />

        <h2>
          Name: {name.first} {name.last}
        </h2>

        <h3>
          Location: {location.city}, {location.country}
        </h3>

        <h4>Gender: {gender}</h4>
      </div>
    );
  }
}

export default UserClass;
