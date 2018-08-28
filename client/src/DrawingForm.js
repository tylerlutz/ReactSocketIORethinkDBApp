import React, {Component} from 'react';
import {createDrawing} from './api';

class DrawingForm extends Component {
    state = {
        drawingName: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        createDrawing(this.state.drawingName);
        this.setState({drawingName: ''});
    }

    render(){
        return(
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.drawingName}
                        onChange={(evt) => this.setState({
                           drawingName: evt.target.value 
                        })}
                        placeholder="Drawing Name"
                        className="Form-drawingInput"
                        required
                    />
                    <button
                        type="submit"
                        className="Form-drawingInput"
                    >Create</button>
                </form>
            </div>
        );
    }
}

export default DrawingForm;