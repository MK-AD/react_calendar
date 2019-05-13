import React, { Component } from 'react'

class Event extends Component {
    handleSubmit = () => {

    }

    handleCancel = () => {

    }

    render() {
        return(
            <div className="a">
                <div className="b">
                    <h1>Neuen Eintrag vornehmen</h1>
                    <form >
                        <p><input type='text' placeholder='Your Name' name='name'/></p>
                        <p><button>Insert Entry</button></p>

                    </form>
                </div>
            </div>
        );
    }

}

export default Event;