import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import UserList from "./components/UserList";
import SoloUser from "./components/SoloUser";
import "./App.css";

injectGlobal`
  html {
    background: #FFFD82;
    font-size: 2vw;
    color: #FF9B71;
    a {
      color: #E84855;
    }
    .column {
      display: flex;
      max-width: 60vw;
      flex-direction: column;
      align-items: space-around;
      justify-content: space-around;
      padding: 1vw;
      margin: 1vw;
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
    }
  }
`

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Music App</h1>
                        <div>
                            <div><Link to="/">Home</Link></div>
                        </div>
                    </div>

                    <Route exact path="/" component={UserList}/>
                    <Route path="/users/:id" component={SoloUser}/>

                </div>
            </Router>
        );
    }
}

export default App