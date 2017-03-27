import React from 'react';
import TextLength from './TextLength';
import CaseStats from './CaseStats';


export default class FreeType extends React.Component {
    
    constructor() {
        super();
        this.state = {
                        liveInput: {}
        };
    }

    setValue(property, event) {
        var value = event.target.value;
        this.setState( ({liveInput}) => {
            liveInput[property] = value;
            return { liveInput: liveInput};
            })
    }


    render() {

        return (
            <div className="form-group">
                <h1>This is the input field component:</h1>
                <textarea rows="10" cols = "80" id="textArea" onChange={this.setValue.bind(this, "liveInput")} />
                <TextLength text={this.state.liveInput.liveInput} />
                <CaseStats text={this.state.liveInput.liveInput} />
            </div>
        )
    }
}



