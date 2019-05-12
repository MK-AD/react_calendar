import React, { Component } from 'react';
import './App.css';
import Calender from './components/calender/';
import NavBar from './components/navbar';

const style = {
    position: "relative",
    margin: "50px auto"
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <hr/>
                <Calender style={style} />
            </div>
        );
    }
}

export default App;