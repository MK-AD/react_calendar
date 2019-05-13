import React, { Component } from 'react';
import './App.css';
import Calender from './components/calender/';
import NavBar from './components/navbar';
import Event from './components/event/event'


class App extends Component {
    state = {
        displayAddEvent: false
    }

    onAddEntryClick = (e, day) => {
        this.setState({
            displayAddEvent: !this.state.displayAddEvent
        })
        console.log(this.state.displayAddEvent)
    }

    render() {
        let questions = null;
        if ( this.state.displayAddEvent ) {
            questions = (
                <div className="add-event-entry">
                    <Event />
                </div>
            )
        }

        return (
            <div className="App">
                <NavBar />
                <hr/>
                {questions}
                <Calender onAddEntryClick={(e, day)=> this.onAddEntryClick(e, day)}/>
            </div>
        );
    }
}

export default App;