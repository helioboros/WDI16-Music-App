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
      display: flex-column;
      justify-content: flex-center;
      align-items: flex-center;
      margin: 10 auto;
    }
    .userHead {
        display: flex-column;
        justify-content: center;
        align-items: center;
        margin: 10 auto;
      }
    .button {
      display: flex;
      justify-content: flex-end;
      margin: .5vw;
      button {
          background: #DA627D;
          color: #450920;
      }
    }
    .contentList{
        display: flex;
        flex-direction: row-wrap;
        flex-wrap: wrap;
        align-items: space-around;
        justify-content: space-around;
    }
    .card {
        display: flex;
        flex-direction: column;
        margin: 1px;
        padding: 3px;
        border: 2px solid #FFA5AB;
    }
    .musicCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20vw;
        height: 20vh;
    }
    .newForm {
        display: flex;
        flex-direction: column;
        background: #FFA5AB;
        color: #A53860;
    }
    .react-player {
        width: 15vw;
        height: 15vh;
    }
    .player-wrapper {
        display: flex;
        flex-direction: column;
        margin: 1px;
        padding: 3px;
        border: 2px solid #FFA5AB;
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
                        <div className='navbar'>
                            <Link to="/">Home</Link>
                        </div>
                    </div>

                    <Route exact path="/" component={UserList} />
                    <Route path="/users/:id" component={SoloUser} />

                </div>
            </Router>
        )
    }
}

export default App