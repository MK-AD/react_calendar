import React, { Component } from 'react';
import './App.css';
import Calender from './components/calender/';
import NavBar from './components/navbar';
import Event from './components/event/event'



class App extends Component {
    state = {
        displayAddEvent: false,
        event_entry_values: ''
    }

    update(value){
        return () => {
            this.setState({
                event_entry_values: value,
            });
        }
    }

    onAddEntryClick = () => {
        this.setState({
            displayAddEvent: !this.state.displayAddEvent
        })
    }

    closeEntry = () => {
        this.setState({
            displayAddEvent: false
        })
    }

    render() {
        console.log(this.state.event_entry_values)
        let questions = null;
        if ( this.state.displayAddEvent ) {
            questions = (
                <div className="add-event-entry">
                    <div className="closeEntryX" onClick={this.closeEntry}>X</div>
                    <div className="clear"/>
                    <Event data={this.update.bind(this)}/>
                </div>
            )
        }

        return (
            <div className="App">
                <NavBar />
                <hr/>
                {questions}
                <Calender onAddEntryClick={(e, day)=> this.onAddEntryClick(e, day)} entry_values={this.state.event_entry_values}/>
            </div>
        );
    }
}

export default App;