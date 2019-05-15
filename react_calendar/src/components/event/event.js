import React, { Component } from 'react'
import './event.css'

class Event extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            title: '',
            year: '',
            month: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
    }

    handleInputChange = (event) => {
        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const greeting = 'Welcome to React';

        return(
            <div >
                    <h4>Neuen Eintrag vornehmen</h4>
                    <form onSubmit={this.handleSubmit} >
                        <p>Title: <input type='text' placeholder='Your Name' name='title' onChange={this.handleInputChange} /></p>
                        <p>Year: <input type='text' placeholder='Your Name' name='year' onChange={this.handleInputChange} /></p>
                        <p>Month: <input type='text' placeholder='Your Name' name='month' onChange={this.handleInputChange} /></p>
                        <p><button onClick={this.props.data(this.state)}>Insert Entry</button></p>

                    </form>
                {greeting}
            </div>

        );
    }

}

export default Event;