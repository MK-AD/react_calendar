import React, { Component } from 'react';
import './App.css';
import Calender from './components/calender/';
import NavBar from './components/navbar';
import Event from './components/event/event'



class App extends Component {
    state = {
        displayAddEvent: false,
        event_entry_values: '',
        day: '',
        current_month : ''
    }

    update(value){
        console.log(value)
        return () => {
            this.setState({
                event_entry_values: value,
                displayAddEvent: value.displayAddEvent
            });
        }
    }

    onAddEntryClick = (e, day, month, year) => {
        this.setState({
            displayAddEvent: !this.state.displayAddEvent,
            day: day,
            month: month,
            year: year
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
                    <Event data={this.update.bind(this)} current_day={this.state.day} current_month = {this.state.month} current_year = {this.state.year} />
                </div>
            )
        }

        return (
            <div className="App">
                <NavBar />
                <hr/>
                {questions}
                <Calender onAddEntryClick={(e, day, month, year)=> this.onAddEntryClick(e, day, month, year)} entry_values={this.state.event_entry_values}/>
            </div>
        );
    }
}

export default App;