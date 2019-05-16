import React, { useContext } from "react";
import "./App.css";
const UserContext = React.createContext();
class App extends React.Component {
  state = {
    firstName: "Ken",
    lastName: "Ling"
  };
  render() {
    const { firstName, lastName } = this.state;
    return (
      <UserContext.Provider value={{ firstName, lastName }}>
        <Main />
      </UserContext.Provider>
    );
  }
}

function Navbar() {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <nav>
      <span>
        Name: {firstName} {lastName}
      </span>
    </nav>
  );
}

function Main({ user }) {
  return (
    <>
      <div>
        <Navbar user={user} />
        <span>Main</span>
      </div>
    </>
  );
}

export default App;
