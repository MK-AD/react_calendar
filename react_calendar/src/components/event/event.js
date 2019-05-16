import React, { Component } from 'react'
import uuidv1 from  'uuid/v1';
import './event.css'

class Event extends Component {
    constructor(props)  {
        super(props)

        this.state = {
            ig: uuidv1(),
            id: '',
            title: '',
            year: '',
            month: '',
            content: 'You can install React from npm.' ,
            prio: 'Lisa' ,
            type:'event',
            displayAddEvent: false,
            new_entry: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value,
            id: this.props.current_day,
            month: this.props.current_month,
            year: this.props.current_year
        })
    }

    closeEntry = () => {
        this.setState({
            displayAddEvent: false
        })
    }

    render() {
        return(
            <div >
                    <h5>Neuen Eintrag für den {this.props.current_day}.{this.props.current_month}.{this.props.current_year} vornehmen</h5>
                    <form onSubmit={this.handleSubmit} >
                        <p>Tätigkeit: <input type='text' placeholder='Your Name' name='title' onChange={this.handleInputChange} /></p>
                        <p>Person: <input type='text' placeholder='Your Name' name='prio' onChange={this.handleInputChange} /></p>
                        <p><button onClick={this.props.data(this.state)}>Insert Entry</button></p>
                    </form>
            </div>
        );
    }
}

export default Event;