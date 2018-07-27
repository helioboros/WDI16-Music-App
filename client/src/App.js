import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import UserList from "./components/UserList";
import SoloUser from "./components/SoloUser";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>horgh</h1>
                        <div>
                            <div><Link to="/">Home</Link></div>
                        </div>
                    </div>

                    <Route exact path="/" component={UserList}/>
                    <Route path="/user/:id" component={SoloUser}/>

                </div>
            </Router>
        );
    }
}

export default App