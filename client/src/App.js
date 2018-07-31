import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import SoloUser from "./components/SoloUser";
import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    background: #450920;
    font-size: 2vw;
    color: #FFA5AB;
    a {
      color: #F9DBBD;
    }
    .header {
      display: flex;
      justify-content: space-around;
      margin: 10 auto;
    }
    .button {
      display: flex;
      justify-content: flex-end;
      margin: .5vw;
      button {
          background: #E84855;
          color: #FFFD82;
      }
    }
    .component {
      display: flex;
      flex-direction: column;
      margin: 1px;
    }
    .newForm {
        display: flex;
        flex-direction: column;
        background: #FFA5AB;
        color: #A53860;
    }
  }
`

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className='header'>
                        <h1>Music App</h1>
                        <div classname='navbar'>
                            <Link to="/">Home</Link>
                            <Link to="/users">Users</Link>
                        </div>
                    </div>

                    <Route exact path="/" component={UserList} />
                    <Route path="/users/:id" component={SoloUser} />

                </div>
            </Router>
        );
    }
}

export default App