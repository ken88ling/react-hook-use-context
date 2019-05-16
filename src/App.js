import React from "react";
import "./App.css";

const UserContext = React.createContext();
class App extends React.Component {
  state = {
    user: "Ken"
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <Main />
      </UserContext.Provider>
    );
  }
}

function Navbar() {
  return (
    <UserContext.Consumer>
      {value => (
        <nav>
          <span>nav {value}</span>
        </nav>
      )}
    </UserContext.Consumer>
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
