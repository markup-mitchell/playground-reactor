import React from 'react';
import TextLength from './TextLength';
import CaseStats from './CaseStats';


export default class FreeType extends React.Component {
    
    constructor() {
        super();
        this.state = {
                        liveInput: {},
                        text: "Could be a message!"
        };
    }

    setValue(property, event) {

        var value = event.target.value;

        this.setState(({liveInput}) => {
            liveInput[property] = value;
            // console.log(liveInput[property]);
            return { liveInput: liveInput};
            }
        )}
    
    
    render() {


    
    return (
            <div className="form-group">
                <h1>This is the input field component:</h1>
                <input type="text" id="freetype" onChange={this.setValue.bind(this, "liveInput")} />
                <TextLength text={this.state.liveInput.liveInput} />
                <CaseStats text={this.state.liveInput.liveInput} />
                
            </div>
    )
    }
}



