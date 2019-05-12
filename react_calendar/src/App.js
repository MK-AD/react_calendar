import React, { Component } from 'react';
import './App.css';
import Calender from './components/calender/';
import NavBar from './components/navbar';


class App extends Component {
    onAddEntryClick = (e, day) => {
        alert(day);
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <hr/>
                <Calender
                          onAddEntryClick={(e, day)=> this.onAddEntryClick(e, day)}/>
            </div>
        );
    }
}

export default App;