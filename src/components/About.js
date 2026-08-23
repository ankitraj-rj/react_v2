import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Section</h1>
      <h3>This is Namaste React</h3>
      <User name={"Akshay Saini (function) "} />
      <UserClass name={"Akshay Saini (class) "} />
    </div>
  );
};

export default About;
