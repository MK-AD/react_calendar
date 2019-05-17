import React, { Component } from 'react';
import './App.css';
import Calender from './components/calender/';
import NavBar from './components/navbar';


class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <hr/>
                <Calender />
            </div>
        );
    }
}

export default App;