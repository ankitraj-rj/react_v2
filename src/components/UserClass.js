import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://randomuser.me/api/"
      );

      const jsonData =
        await response.json();

      this.setState({
        userInfo: jsonData.results[0],
      });
    } catch (error) {
      console.error(
        "User API Error:",
        error
      );
    }
  }

  render() {
    if (this.state.userInfo === null) {
      return (
        <h2>Loading...</h2>
      );
    }

    const {
      name,
      location,
      gender,
      picture,
    } = this.state.userInfo;

    return (
      <div className="user-card">
        <img
          src={picture.large}
          alt={`${name.first} ${name.last}`}
        />

        <h2>
          Name: {name.first}{" "}
          {name.last}
        </h2>

        <h3>
          Location:{" "}
          {location.city},{" "}
          {location.country}
        </h3>

        <h4>
          Gender: {gender}
        </h4>
      </div>
    );
  }
}

export default UserClass;